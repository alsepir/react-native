// Размерная верстка? 
import { Dimensions } from 'react-native'

const win = Dimensions.get('window')
const HEADER = 45 
const LIST = win.height - HEADER - 25
const LIST_BOTTOM = win.height - HEADER - 70
const LIST_IMAGE = LIST - 160
const w = win.width

export { HEADER, LIST, LIST_BOTTOM, LIST_IMAGE }

// level App
const INPUT = 'input'
const MENU = 'menu'
const DESCRIPTION = 'description'

export { INPUT, MENU, DESCRIPTION }