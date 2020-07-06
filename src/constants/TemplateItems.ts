import { ItemPrizeData, ItemChestData, ItemTypes } from '../classes/Item';

export const templatePrizes: ReadonlyArray<ItemPrizeData> = [
    { name: 'Final Fantasy VII: Remake', picture: '', price: 59.00, key: 'DTC5A-85I3K-26178', itemType: ItemTypes.Prize },
    { name: 'Persona 5 Royal: Standard Edition', picture: '', price: 59.99, key: 'DTC5A-85I3K-26178', itemType: ItemTypes.Prize },
    { name: 'Days Gone', picture: '', price: 26.87, key: 'DTC5A-85I3K-26178', itemType: ItemTypes.Prize },
    { name: 'Red Dead Redemption 2', picture: '', price: 39.99, key: 'DTC5A-85I3K-26178', itemType: ItemTypes.Prize },
    { name: 'God of War', picture: '', price: 18.50, key: 'DTC5A-85I3K-26178', itemType: ItemTypes.Prize }
]

export const templateChests: ReadonlyArray<ItemChestData> = [
    { name: 'Skrzynia Infernus', picture: '', itemType: ItemTypes.Chest },
]