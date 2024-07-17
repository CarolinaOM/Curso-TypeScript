abstract class SuperHeroe {
    constructor(parameters) {
        
    }

    abstract metodoLuchar(): void
}

class SuperMan extends SuperHeroe{
    metodoLuchar(): void {
        console.log('Soy Superman y derroto a los malos');
        
    }
}

class Batman extends SuperHeroe{
    metodoLuchar(): void {
        console.log('Soy Batman');
        
    }
}