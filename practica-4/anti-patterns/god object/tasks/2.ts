class FlightManager {
    flights: any[] = [];

    scheduleFlight(flight: any) {
        if (this.validateFlightData(flight)) {
            this.flights.push(flight);
        } else {
            console.error("Datos de vuelo no válidos");
        }
    }

    private validateFlightData(flight: any) {
        return true;
    }
}

class PassengerManager {
    passengers: any[] = [];

    checkInPassenger(passenger: any) {
        if (this.validatePassengerData(passenger)) {
            this.passengers.push(passenger);
        } else {
            console.error("Datos de pasajero no válidos");
        }
    }

    private validatePassengerData(passenger: any) {
        return true;
    }
}

class CrewManager {
    crews: any[] = [];

    assignCrewToFlight(crew: any, flightID: string) {
        if (this.validateCrewData(crew)) {
            this.crews.push({ ...crew, flightID });
        } else {
            console.error("Datos de tripulación no válidos");
        }
    }

    private validateCrewData(crew: any) {
        return true;
    }
}

class MaintenanceManager {
    planesMaintenance: any[] = [];

    logMaintenance(planeID: string, maintenance: any) {
        if (this.validateMaintenanceData(maintenance)) {
            this.planesMaintenance.push({ planeID, ...maintenance });
        } else {
            console.error("Datos de mantenimiento no válidos");
        }
    }

    private validateMaintenanceData(maintenance: any) {
        return true;
    }
}

class FinancialManager {
    financialRecords: any[] = [];

    recordFinancialTransaction(transaction: any) {
        if (this.validateTransactionData(transaction)) {
            this.financialRecords.push(transaction);
        } else {
            console.error("Datos de transacción financiera no válidos");
        }
    }

    private validateTransactionData(transaction: any) {
        return true;
    }
}

