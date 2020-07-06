import { ItemPrizeData, ItemChestData, ItemTypes } from '../classes/Item';

export const templatePrizes: ReadonlyArray<ItemPrizeData> = [
    { name: 'Final Fantasy VII: Remake', picture: '../assets/sample-reward.png', price: 59.00, key: 'DTC5A-85I3K-26178', itemType: ItemTypes.Prize },
    { name: 'Persona 5 Royal: Standard Edition', picture: '../assets/sample-reward.png', price: 59.99, key: '19CRP-9QF5C-A4S3H', itemType: ItemTypes.Prize },
    { name: 'Days Gone', picture: '../assets/sample-reward.png', price: 26.87, key: '86NS5-5KA86-NNE6N', itemType: ItemTypes.Prize },
    { name: 'Red Dead Redemption 2', picture: '../assets/sample-reward.png', price: 39.99, key: '8JT7G-D67FP-MSSK3', itemType: ItemTypes.Prize },
    { name: 'God of War', picture: '../assets/sample-reward.png', price: 18.50, key: 'JL539-74FLN-PONEG', itemType: ItemTypes.Prize }
]

export const templateChests: ReadonlyArray<ItemChestData> = [
    { name: 'Skrzynia Infernus', picture: '../assets/sample-chest.png', itemType: ItemTypes.Chest },
]