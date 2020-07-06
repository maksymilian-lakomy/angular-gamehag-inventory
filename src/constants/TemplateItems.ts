import { ItemPrize, ItemChest } from '../classes/Item';

export const templatePrizes: ReadonlyArray<ItemPrize> = [
    new ItemPrize('0', 'Final Fantasy VII: Remake', '', 59.00, 'DTC5A-85I3K-26178'),
    new ItemPrize('1', 'Persona 5 Royal: Standard Edition', '', 59.99, '53611-BD4GT-BO5JP'),
    new ItemPrize('2', 'Days Gone', '', 26.87, '4BLL8-3QO3K-R1I9D'),
    new ItemPrize('3', 'Red Dead Redemption 2', '', 39.99, 'JM3E8-TMT8M-3DAGD'),
    new ItemPrize('4', 'God of War', '', 18.50, '154KG-4S4R8-MO2I7')
]

export const templateChests: ReadonlyArray<ItemChest> = [
    new ItemChest('0', 'Skrzynia Infernus', '')
]