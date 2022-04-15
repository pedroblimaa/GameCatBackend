const { GENRES, SEARCHES } = require('./constants')

const validateId = (id, next) => {
  try {
    const idNumber = Number(id)
    if (!idNumber) {
      throw new Error("Invalid Id")
    }
  } catch (err) {
    throw new Error("Invalid Id")
  }
  next()
}

const validateDate = (date, next) => {
  try {
    const dateNumber = Number(date)
    if (!dateNumber) {
      throw new Error("Invalid Date")
    }
  } catch (err) {
    throw new Error("Invalid Date")
  }
  next()
}

const validateGenre = (genre, next) => {
  validateArray(genre, GENRES, "Genre", next)
}

const validateGameMode = (gameMode, next) => {
  validateArray(gameMode, GENRES, "Game Mode", next)
}

const validateArray = (arrayItem, array, arrayName, next) => {
  if (!array.includes(arrayItem)) {
    throw new Error("Invalid", arrayName)
  }
  next()
}

const validateSearch = (search, next) => {
  if(!(search in SEARCHES) && search !== "") {
    throw new Error("Invalid Search")
  }
  next()
}


module.exports = {
  validateItem: (item, itemName) => {
    validateSearch(itemName, () => {})

    switch (itemName) {
      case 'date':
        validateDate(item, () => { })
        break;
      case 'id':
        validateId(item, () => { })
        break;
      case 'category':
        validateGenre(item, () => { })
        break;
      case 'gameMode':
        validateGameMode(item, () => { })
        break;
      default:
        break;
    }
  }
}
