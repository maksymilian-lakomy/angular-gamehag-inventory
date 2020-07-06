export enum ItemTypes {
    'Chest',
    'Prize'
}

export abstract class Item {
    public readonly id: string;

    public readonly name: string;
    public readonly picture: string;

    constructor(id: string, name: string, picture: string) {
        this.id = id;
        this.name = name;
        this.picture = picture;
    }

    public abstract itemType: ItemTypes;
}

export class ItemChest extends Item {
    public readonly itemType = ItemTypes.Chest;

    constructor(id: string, name: string, picture: string) {
        super(id, name, picture);
    }

    public getRandomPrize(prizes: Array<ItemPrize>): ItemPrize {
        const index = Math.floor(Math.random() * prizes.length);
        return prizes[index];
    }
}

export class ItemPrize extends Item {
    public readonly itemType = ItemTypes.Prize;

    public readonly price: number;
    public readonly key: string | null;

    constructor(id: string, name: string, picture: string, price: number, key: string | null = null) {
        super(id, name, picture);
        this.price = price;
        this.key = key;
    }
}