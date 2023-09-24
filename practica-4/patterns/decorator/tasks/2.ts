// class Computer {
//     components: string[] = [];

//     addComponent(component: string) {
//         this.components.push(component);
//     }

//     showConfiguration() {
//         console.log(`This computer has: ${this.components.join(', ')}`);
//     }
// }

// const myComputer = new Computer();
// myComputer.addComponent('16GB RAM');
// myComputer.addComponent('1TB SSD');
// myComputer.addComponent('Intel i7 Processor');
// myComputer.showConfiguration();


// Component interface
interface ComputerComponent {
    showConfiguration(): void;
}

// ConcreteComponent
class BasicComputer implements ComputerComponent {
    components: string[] = [];

    addComponent(component: string) {
        this.components.push(component);
    }

    showConfiguration() {
        console.log(`This computer has: ${this.components.join(', ')}`);
    }
}

// Decorator
class ComputerDecorator implements ComputerComponent {
    protected computer: ComputerComponent;

    constructor(computer: ComputerComponent) {
        this.computer = computer;
    }

    showConfiguration() {
        this.computer.showConfiguration();
    }
}

// ConcreteDecoratorA
class GraphicsCardDecorator extends ComputerDecorator {
    private graphicsCard: string;

    constructor(computer: ComputerComponent, graphicsCard: string) {
        super(computer);
        this.graphicsCard = graphicsCard;
    }

    showConfiguration() {
        super.showConfiguration();
        console.log(`Graphics Card: ${this.graphicsCard}`);
    }
}

// ConcreteDecoratorB
class SoundCardDecorator extends ComputerDecorator {
    private soundCard: string;

    constructor(computer: ComputerComponent, soundCard: string) {
        super(computer);
        this.soundCard = soundCard;
    }

    showConfiguration() {
        super.showConfiguration();
        console.log(`Sound Card: ${this.soundCard}`);
    }
}

// Usage
const myBasicComputer = new BasicComputer();
myBasicComputer.addComponent('16GB RAM');
myBasicComputer.addComponent('1TB SSD');
myBasicComputer.addComponent('Intel i7 Processor');

const computerWithGraphicsCard = new GraphicsCardDecorator(myBasicComputer, 'NVIDIA RTX 3080');
const computerWithSoundCard = new SoundCardDecorator(computerWithGraphicsCard, 'Creative Sound Blaster');

computerWithSoundCard.showConfiguration();
