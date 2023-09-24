// class Room {
//     paint: string;
//     design: string;

//     constructor(paint: string) {
//         this.paint = paint;
//         this.design = '';
//     }

//     applyDesign(design: string) {
//         this.design += design;
//     }

//     showRoom() {
//         console.log(`This room is painted with ${this.paint} and has a ${this.design} design.`);
//     }
// }

// const myRoom = new Room('blue');
// myRoom.applyDesign('stripe');
// myRoom.showRoom();



// Component interface
interface RoomDecorator {
    applyDecoration(room: Room): void;
}

// ConcreteComponent
class Room {
    paint: string;
    design: string;

    constructor(paint: string) {
        this.paint = paint;
        this.design = '';
    }

    applyDesign(design: string) {
        this.design += design;
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint} and has a${this.design ? 'n' : ''}${this.design} design.`);
    }
}

// ConcreteDecoratorA
class WallpaperDecorator implements RoomDecorator {
    wallpaper: string;

    constructor(wallpaper: string) {
        this.wallpaper = wallpaper;
    }

    applyDecoration(room: Room) {
        room.applyDesign(` ${this.wallpaper} wallpaper`);
    }
}

// ConcreteDecoratorB
class FurnitureDecorator implements RoomDecorator {
    furniture: string;

    constructor(furniture: string) {
        this.furniture = furniture;
    }

    applyDecoration(room: Room) {
        room.applyDesign(` ${this.furniture} furniture`);
    }
}

// Usage
const myRoom = new Room('blue');
myRoom.applyDesign('stripe');
myRoom.showRoom();

const roomWithWallpaper = new WallpaperDecorator('floral');
roomWithWallpaper.applyDecoration(myRoom);
myRoom.showRoom(); // This room is painted with blue and has a stripe design. It has floral wallpaper.

const roomWithFurniture = new FurnitureDecorator('modern');
roomWithFurniture.applyDecoration(myRoom);
myRoom.showRoom(); // This room is painted with blue and has a stripe design. It has modern furniture.
