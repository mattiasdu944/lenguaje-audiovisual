class DeliveryService {
    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address}`);
    }
}

class BikeDelivery extends DeliveryService {
    constructor() {
        super();
    }

    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address} using a bike.`);
    }
}

class PackageService {
    deliveryMethod: DeliveryService;

    constructor() {
        this.deliveryMethod = new BikeDelivery();
    }

    sendPackage(packageId: string, address: string) {
        this.deliveryMethod.deliverPackage(packageId, address);
    }
}

const packageService = new PackageService();
packageService.sendPackage("12345", "123 Main St");
