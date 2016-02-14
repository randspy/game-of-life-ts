export interface Cell {
    isAlive(): boolean;
}

export class AliveCell implements Cell{
    isAlive():boolean {
        return true;
    }
}

export class DeadCell implements Cell{
    isAlive():boolean {
        return false;
    }
}
