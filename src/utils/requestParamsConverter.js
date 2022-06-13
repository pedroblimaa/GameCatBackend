const extractSearchFieldsAndValues = (search) => {
  const searchExpressions = []
  const searchParams = search.split('&')

  searchParams.forEach((searchParam) => {
    const [field, value] = searchParam.split('=')
    const sqlExpression = {
      field: field,
      value: value,
    }

    searchExpressions.push(sqlExpression)
  })

  return searchExpressions
}

const convertSearchToSql = (search) => {
  const searchExpressions = extractSearchFieldsAndValues(search)
  const searchSql = searchExpressions.map((expression) => `${expression.field} = '${expression.value}'`).join(' AND ')

  return searchSql
}

const convertUniqueSearchToSql = (search) => {
  const [field, value] = search.split('=')

  if (!search) {
    return ''
  }

  if (field === 'name') {
    return `search "${value}";`
  }

  return `where ${field} = '${value}'; `
}

const convertSortToSql = (sort) => {
  const [field, order] = sort.split('=')

  return `sort ${field} ${order}; `
}

const convertFields = (fields) => {
  let fieldsString = 'fields '

  fields.map((field) => {
    fieldsString += `${field},`
  })

  return `${fieldsString.slice(0, -1)}; `
}

module.exports = {
  setUpParams: (limit, offset, sort, seach) => {
    const fields = ['id', 'name']
    const fieldsParams = convertFields(fields)
    const searchParams = convertUniqueSearchToSql(seach)
    const sortParams = ''
    if (!searchParams) {
      sortParams = convertSortToSql(sort)
    }
    const params = `${fieldsParams}${searchParams}${sortParams}limit ${limit}; offset ${offset};`

    console.log(params)

    return params
  },
}
