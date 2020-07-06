export interface Unique {
    readonly id: string;
}

export enum ItemTypes {
    'Chest',
    'Prize'
}

export interface ItemData {
    readonly name: string;
    readonly picture: string;
    readonly itemType: ItemTypes;
}

export interface ItemChestData extends ItemData {

}

export interface ItemPrizeData extends ItemData {
    readonly price: number;
    readonly key: string | null;
}

export interface UniqueItemData extends ItemData, Unique { };