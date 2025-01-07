
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateVisitorInput {
    exampleField?: Nullable<number>;
}

export class UpdateVisitorInput {
    id: number;
}

export class Visitor {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract visitors(): Nullable<Visitor>[] | Promise<Nullable<Visitor>[]>;

    abstract visitor(id: number): Nullable<Visitor> | Promise<Nullable<Visitor>>;
}

export abstract class IMutation {
    abstract createVisitor(createVisitorInput: CreateVisitorInput): Visitor | Promise<Visitor>;

    abstract updateVisitor(updateVisitorInput: UpdateVisitorInput): Visitor | Promise<Visitor>;

    abstract removeVisitor(id: number): Nullable<Visitor> | Promise<Nullable<Visitor>>;
}

type Nullable<T> = T | null;
