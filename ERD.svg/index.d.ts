
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Session
 * 
 */
export type Session = {
  id: number
  userId: number
  token: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Enrollment
 * 
 */
export type Enrollment = {
  id: number
  name: string
  cpf: string
  birthday: Date
  phone: string
  userId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Address
 * 
 */
export type Address = {
  id: number
  cep: string
  street: string
  city: string
  state: string
  number: string
  neighborhood: string
  addressDetail: string | null
  enrollmentId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Imovel
 * 
 */
export type Imovel = {
  id: number
  area: number
  rooms: number
  bathroom: number
  garage: number
  yard: boolean
  ilumination: amountStatus
  water: amountStatus
  pipedGas: boolean
  furniture: mobiliaStatus
  pet: boolean
  condominium: number
  rent: number
  iptu: number
  availability: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model AddressImovel
 * 
 */
export type AddressImovel = {
  id: number
  cep: string
  street: string
  number: string
  neighborhood: string
  city: string
  state: string
  addressDetail: string | null
  imovelId: number
}

/**
 * Model PhotosImmobile
 * 
 */
export type PhotosImmobile = {
  id: number
  name: string
  imovelId: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const amountStatus: {
  SHARED: 'SHARED',
  UNIQUE: 'UNIQUE',
  INCLUDED: 'INCLUDED'
};

export type amountStatus = (typeof amountStatus)[keyof typeof amountStatus]


export const mobiliaStatus: {
  FURNISHED: 'FURNISHED',
  FURNISHEDOFF: 'FURNISHEDOFF',
  FURNISHEDSEMI: 'FURNISHEDSEMI'
};

export type mobiliaStatus = (typeof mobiliaStatus)[keyof typeof mobiliaStatus]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<GlobalReject>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<GlobalReject>;

  /**
   * `prisma.imovel`: Exposes CRUD operations for the **Imovel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imovels
    * const imovels = await prisma.imovel.findMany()
    * ```
    */
  get imovel(): Prisma.ImovelDelegate<GlobalReject>;

  /**
   * `prisma.addressImovel`: Exposes CRUD operations for the **AddressImovel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddressImovels
    * const addressImovels = await prisma.addressImovel.findMany()
    * ```
    */
  get addressImovel(): Prisma.AddressImovelDelegate<GlobalReject>;

  /**
   * `prisma.photosImmobile`: Exposes CRUD operations for the **PhotosImmobile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhotosImmobiles
    * const photosImmobiles = await prisma.photosImmobile.findMany()
    * ```
    */
  get photosImmobile(): Prisma.PhotosImmobileDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.14.0
   * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Enrollment: 'Enrollment',
    Address: 'Address',
    Imovel: 'Imovel',
    AddressImovel: 'AddressImovel',
    PhotosImmobile: 'PhotosImmobile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Session: number
    Enrollment: number
  }

  export type UserCountOutputTypeSelect = {
    Session?: boolean
    Enrollment?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type EnrollmentCountOutputType
   */


  export type EnrollmentCountOutputType = {
    Address: number
  }

  export type EnrollmentCountOutputTypeSelect = {
    Address?: boolean
  }

  export type EnrollmentCountOutputTypeGetPayload<
    S extends boolean | null | undefined | EnrollmentCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? EnrollmentCountOutputType
    : S extends undefined
    ? never
    : S extends EnrollmentCountOutputTypeArgs
    ?'include' extends U
    ? EnrollmentCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof EnrollmentCountOutputType ? EnrollmentCountOutputType[P] : never
  } 
    : EnrollmentCountOutputType
  : EnrollmentCountOutputType




  // Custom InputTypes

  /**
   * EnrollmentCountOutputType without action
   */
  export type EnrollmentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EnrollmentCountOutputType
     * 
    **/
    select?: EnrollmentCountOutputTypeSelect | null
  }



  /**
   * Count Type ImovelCountOutputType
   */


  export type ImovelCountOutputType = {
    addressImovel: number
    photosImmobile: number
  }

  export type ImovelCountOutputTypeSelect = {
    addressImovel?: boolean
    photosImmobile?: boolean
  }

  export type ImovelCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ImovelCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ImovelCountOutputType
    : S extends undefined
    ? never
    : S extends ImovelCountOutputTypeArgs
    ?'include' extends U
    ? ImovelCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ImovelCountOutputType ? ImovelCountOutputType[P] : never
  } 
    : ImovelCountOutputType
  : ImovelCountOutputType




  // Custom InputTypes

  /**
   * ImovelCountOutputType without action
   */
  export type ImovelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ImovelCountOutputType
     * 
    **/
    select?: ImovelCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Session?: boolean | SessionFindManyArgs
    Enrollment?: boolean | EnrollmentFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    Session?: boolean | SessionFindManyArgs
    Enrollment?: boolean | EnrollmentFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Session' ? Array < SessionGetPayload<S['include'][P]>>  :
        P extends 'Enrollment' ? Array < EnrollmentGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Session' ? Array < SessionGetPayload<S['select'][P]>>  :
        P extends 'Enrollment' ? Array < EnrollmentGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Session<T extends SessionFindManyArgs = {}>(args?: Subset<T, SessionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>;

    Enrollment<T extends EnrollmentFindManyArgs = {}>(args?: Subset<T, EnrollmentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Enrollment>>, PrismaPromise<Array<EnrollmentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: number
    userId: number
    token: string
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    userId?: boolean
    User?: boolean | UserArgs
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionInclude = {
    User?: boolean | UserArgs
  }

  export type SessionGetPayload<
    S extends boolean | null | undefined | SessionArgs,
    U = keyof S
      > = S extends true
        ? Session
    : S extends undefined
    ? never
    : S extends SessionArgs | SessionFindManyArgs
    ?'include' extends U
    ? Session  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof Session ? Session[P] : never
  } 
    : Session
  : Session


  type SessionCountArgs = Merge<
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }
  >

  export interface SessionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Throw an Error if a Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Throw an Error if a Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Sessions to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to create a Session.
     * 
    **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    /**
     * The data used to create many Sessions.
     * 
    **/
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to update a Session.
     * 
    **/
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    /**
     * The data used to update Sessions.
     * 
    **/
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The filter to search for the Session to update in case it exists.
     * 
    **/
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     * 
    **/
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter which Session to delete.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    /**
     * Filter which Sessions to delete
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
  }



  /**
   * Model Enrollment
   */


  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    cpf: string | null
    birthday: Date | null
    phone: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    cpf: string | null
    birthday: Date | null
    phone: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    name: number
    cpf: number
    birthday: number
    phone: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EnrollmentSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    birthday?: true
    phone?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    birthday?: true
    phone?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    birthday?: true
    phone?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs = {
    /**
     * Filter which Enrollment to aggregate.
     * 
    **/
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     * 
    **/
    orderBy?: Enumerable<EnrollmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs = {
    where?: EnrollmentWhereInput
    orderBy?: Enumerable<EnrollmentOrderByWithAggregationInput>
    by: Array<EnrollmentScalarFieldEnum>
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }


  export type EnrollmentGroupByOutputType = {
    id: number
    name: string
    cpf: string
    birthday: Date
    phone: string
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    birthday?: boolean
    phone?: boolean
    userId?: boolean
    User?: boolean | UserArgs
    Address?: boolean | AddressFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | EnrollmentCountOutputTypeArgs
  }

  export type EnrollmentInclude = {
    User?: boolean | UserArgs
    Address?: boolean | AddressFindManyArgs
    _count?: boolean | EnrollmentCountOutputTypeArgs
  }

  export type EnrollmentGetPayload<
    S extends boolean | null | undefined | EnrollmentArgs,
    U = keyof S
      > = S extends true
        ? Enrollment
    : S extends undefined
    ? never
    : S extends EnrollmentArgs | EnrollmentFindManyArgs
    ?'include' extends U
    ? Enrollment  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Address' ? Array < AddressGetPayload<S['include'][P]>>  :
        P extends '_count' ? EnrollmentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Address' ? Array < AddressGetPayload<S['select'][P]>>  :
        P extends '_count' ? EnrollmentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Enrollment ? Enrollment[P] : never
  } 
    : Enrollment
  : Enrollment


  type EnrollmentCountArgs = Merge<
    Omit<EnrollmentFindManyArgs, 'select' | 'include'> & {
      select?: EnrollmentCountAggregateInputType | true
    }
  >

  export interface EnrollmentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EnrollmentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EnrollmentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Enrollment'> extends True ? CheckSelect<T, Prisma__EnrollmentClient<Enrollment>, Prisma__EnrollmentClient<EnrollmentGetPayload<T>>> : CheckSelect<T, Prisma__EnrollmentClient<Enrollment | null >, Prisma__EnrollmentClient<EnrollmentGetPayload<T> | null >>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EnrollmentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EnrollmentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Enrollment'> extends True ? CheckSelect<T, Prisma__EnrollmentClient<Enrollment>, Prisma__EnrollmentClient<EnrollmentGetPayload<T>>> : CheckSelect<T, Prisma__EnrollmentClient<Enrollment | null >, Prisma__EnrollmentClient<EnrollmentGetPayload<T> | null >>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EnrollmentFindManyArgs>(
      args?: SelectSubset<T, EnrollmentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Enrollment>>, PrismaPromise<Array<EnrollmentGetPayload<T>>>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
    **/
    create<T extends EnrollmentCreateArgs>(
      args: SelectSubset<T, EnrollmentCreateArgs>
    ): CheckSelect<T, Prisma__EnrollmentClient<Enrollment>, Prisma__EnrollmentClient<EnrollmentGetPayload<T>>>

    /**
     * Create many Enrollments.
     *     @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     *     @example
     *     // Create many Enrollments
     *     const enrollment = await prisma.enrollment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EnrollmentCreateManyArgs>(
      args?: SelectSubset<T, EnrollmentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
    **/
    delete<T extends EnrollmentDeleteArgs>(
      args: SelectSubset<T, EnrollmentDeleteArgs>
    ): CheckSelect<T, Prisma__EnrollmentClient<Enrollment>, Prisma__EnrollmentClient<EnrollmentGetPayload<T>>>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EnrollmentUpdateArgs>(
      args: SelectSubset<T, EnrollmentUpdateArgs>
    ): CheckSelect<T, Prisma__EnrollmentClient<Enrollment>, Prisma__EnrollmentClient<EnrollmentGetPayload<T>>>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EnrollmentDeleteManyArgs>(
      args?: SelectSubset<T, EnrollmentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EnrollmentUpdateManyArgs>(
      args: SelectSubset<T, EnrollmentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
    **/
    upsert<T extends EnrollmentUpsertArgs>(
      args: SelectSubset<T, EnrollmentUpsertArgs>
    ): CheckSelect<T, Prisma__EnrollmentClient<Enrollment>, Prisma__EnrollmentClient<EnrollmentGetPayload<T>>>

    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EnrollmentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Address<T extends AddressFindManyArgs = {}>(args?: Subset<T, AddressFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Address>>, PrismaPromise<Array<AddressGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
    /**
     * Throw an Error if a Enrollment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Enrollment to fetch.
     * 
    **/
    where: EnrollmentWhereUniqueInput
  }


  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
    /**
     * Throw an Error if a Enrollment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Enrollment to fetch.
     * 
    **/
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     * 
    **/
    orderBy?: Enumerable<EnrollmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     * 
    **/
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     * 
    **/
    distinct?: Enumerable<EnrollmentScalarFieldEnum>
  }


  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
    /**
     * Filter, which Enrollments to fetch.
     * 
    **/
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     * 
    **/
    orderBy?: Enumerable<EnrollmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     * 
    **/
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EnrollmentScalarFieldEnum>
  }


  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
    /**
     * The data needed to create a Enrollment.
     * 
    **/
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }


  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs = {
    /**
     * The data used to create many Enrollments.
     * 
    **/
    data: Enumerable<EnrollmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
    /**
     * The data needed to update a Enrollment.
     * 
    **/
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     * 
    **/
    where: EnrollmentWhereUniqueInput
  }


  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs = {
    /**
     * The data used to update Enrollments.
     * 
    **/
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     * 
    **/
    where?: EnrollmentWhereInput
  }


  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     * 
    **/
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     * 
    **/
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }


  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
    /**
     * Filter which Enrollment to delete.
     * 
    **/
    where: EnrollmentWhereUniqueInput
  }


  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs = {
    /**
     * Filter which Enrollments to delete
     * 
    **/
    where?: EnrollmentWhereInput
  }


  /**
   * Enrollment without action
   */
  export type EnrollmentArgs = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
  }



  /**
   * Model Address
   */


  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    enrollmentId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    enrollmentId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    cep: string | null
    street: string | null
    city: string | null
    state: string | null
    number: string | null
    neighborhood: string | null
    addressDetail: string | null
    enrollmentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    cep: string | null
    street: string | null
    city: string | null
    state: string | null
    number: string | null
    neighborhood: string | null
    addressDetail: string | null
    enrollmentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    cep: number
    street: number
    city: number
    state: number
    number: number
    neighborhood: number
    addressDetail: number
    enrollmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    enrollmentId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    enrollmentId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    cep?: true
    street?: true
    city?: true
    state?: true
    number?: true
    neighborhood?: true
    addressDetail?: true
    enrollmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    cep?: true
    street?: true
    city?: true
    state?: true
    number?: true
    neighborhood?: true
    addressDetail?: true
    enrollmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    cep?: true
    street?: true
    city?: true
    state?: true
    number?: true
    neighborhood?: true
    addressDetail?: true
    enrollmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs = {
    /**
     * Filter which Address to aggregate.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs = {
    where?: AddressWhereInput
    orderBy?: Enumerable<AddressOrderByWithAggregationInput>
    by: Array<AddressScalarFieldEnum>
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }


  export type AddressGroupByOutputType = {
    id: number
    cep: string
    street: string
    city: string
    state: string
    number: string
    neighborhood: string
    addressDetail: string | null
    enrollmentId: number
    createdAt: Date
    updatedAt: Date
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect = {
    id?: boolean
    cep?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    number?: boolean
    neighborhood?: boolean
    addressDetail?: boolean
    enrollmentId?: boolean
    Enrollment?: boolean | EnrollmentArgs
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AddressInclude = {
    Enrollment?: boolean | EnrollmentArgs
  }

  export type AddressGetPayload<
    S extends boolean | null | undefined | AddressArgs,
    U = keyof S
      > = S extends true
        ? Address
    : S extends undefined
    ? never
    : S extends AddressArgs | AddressFindManyArgs
    ?'include' extends U
    ? Address  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Enrollment' ? EnrollmentGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Enrollment' ? EnrollmentGetPayload<S['select'][P]> :  P extends keyof Address ? Address[P] : never
  } 
    : Address
  : Address


  type AddressCountArgs = Merge<
    Omit<AddressFindManyArgs, 'select' | 'include'> & {
      select?: AddressCountAggregateInputType | true
    }
  >

  export interface AddressDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AddressFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AddressFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Address'> extends True ? CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>> : CheckSelect<T, Prisma__AddressClient<Address | null >, Prisma__AddressClient<AddressGetPayload<T> | null >>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AddressFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AddressFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Address'> extends True ? CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>> : CheckSelect<T, Prisma__AddressClient<Address | null >, Prisma__AddressClient<AddressGetPayload<T> | null >>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AddressFindManyArgs>(
      args?: SelectSubset<T, AddressFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Address>>, PrismaPromise<Array<AddressGetPayload<T>>>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
    **/
    create<T extends AddressCreateArgs>(
      args: SelectSubset<T, AddressCreateArgs>
    ): CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>>

    /**
     * Create many Addresses.
     *     @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     *     @example
     *     // Create many Addresses
     *     const address = await prisma.address.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AddressCreateManyArgs>(
      args?: SelectSubset<T, AddressCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends AddressDeleteArgs>(
      args: SelectSubset<T, AddressDeleteArgs>
    ): CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AddressUpdateArgs>(
      args: SelectSubset<T, AddressUpdateArgs>
    ): CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AddressDeleteManyArgs>(
      args?: SelectSubset<T, AddressDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AddressUpdateManyArgs>(
      args: SelectSubset<T, AddressUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
    **/
    upsert<T extends AddressUpsertArgs>(
      args: SelectSubset<T, AddressUpsertArgs>
    ): CheckSelect<T, Prisma__AddressClient<Address>, Prisma__AddressClient<AddressGetPayload<T>>>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AddressClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Enrollment<T extends EnrollmentArgs = {}>(args?: Subset<T, EnrollmentArgs>): CheckSelect<T, Prisma__EnrollmentClient<Enrollment | null >, Prisma__EnrollmentClient<EnrollmentGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Throw an Error if a Address can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Throw an Error if a Address can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     * 
    **/
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address findMany
   */
  export type AddressFindManyArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Addresses to fetch.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address create
   */
  export type AddressCreateArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The data needed to create a Address.
     * 
    **/
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }


  /**
   * Address createMany
   */
  export type AddressCreateManyArgs = {
    /**
     * The data used to create many Addresses.
     * 
    **/
    data: Enumerable<AddressCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Address update
   */
  export type AddressUpdateArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The data needed to update a Address.
     * 
    **/
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs = {
    /**
     * The data used to update Addresses.
     * 
    **/
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     * 
    **/
    where?: AddressWhereInput
  }


  /**
   * Address upsert
   */
  export type AddressUpsertArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The filter to search for the Address to update in case it exists.
     * 
    **/
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     * 
    **/
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }


  /**
   * Address delete
   */
  export type AddressDeleteArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter which Address to delete.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs = {
    /**
     * Filter which Addresses to delete
     * 
    **/
    where?: AddressWhereInput
  }


  /**
   * Address without action
   */
  export type AddressArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
  }



  /**
   * Model Imovel
   */


  export type AggregateImovel = {
    _count: ImovelCountAggregateOutputType | null
    _avg: ImovelAvgAggregateOutputType | null
    _sum: ImovelSumAggregateOutputType | null
    _min: ImovelMinAggregateOutputType | null
    _max: ImovelMaxAggregateOutputType | null
  }

  export type ImovelAvgAggregateOutputType = {
    id: number | null
    area: number | null
    rooms: number | null
    bathroom: number | null
    garage: number | null
    condominium: number | null
    rent: number | null
    iptu: number | null
  }

  export type ImovelSumAggregateOutputType = {
    id: number | null
    area: number | null
    rooms: number | null
    bathroom: number | null
    garage: number | null
    condominium: number | null
    rent: number | null
    iptu: number | null
  }

  export type ImovelMinAggregateOutputType = {
    id: number | null
    area: number | null
    rooms: number | null
    bathroom: number | null
    garage: number | null
    yard: boolean | null
    ilumination: amountStatus | null
    water: amountStatus | null
    pipedGas: boolean | null
    furniture: mobiliaStatus | null
    pet: boolean | null
    condominium: number | null
    rent: number | null
    iptu: number | null
    availability: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImovelMaxAggregateOutputType = {
    id: number | null
    area: number | null
    rooms: number | null
    bathroom: number | null
    garage: number | null
    yard: boolean | null
    ilumination: amountStatus | null
    water: amountStatus | null
    pipedGas: boolean | null
    furniture: mobiliaStatus | null
    pet: boolean | null
    condominium: number | null
    rent: number | null
    iptu: number | null
    availability: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImovelCountAggregateOutputType = {
    id: number
    area: number
    rooms: number
    bathroom: number
    garage: number
    yard: number
    ilumination: number
    water: number
    pipedGas: number
    furniture: number
    pet: number
    condominium: number
    rent: number
    iptu: number
    availability: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImovelAvgAggregateInputType = {
    id?: true
    area?: true
    rooms?: true
    bathroom?: true
    garage?: true
    condominium?: true
    rent?: true
    iptu?: true
  }

  export type ImovelSumAggregateInputType = {
    id?: true
    area?: true
    rooms?: true
    bathroom?: true
    garage?: true
    condominium?: true
    rent?: true
    iptu?: true
  }

  export type ImovelMinAggregateInputType = {
    id?: true
    area?: true
    rooms?: true
    bathroom?: true
    garage?: true
    yard?: true
    ilumination?: true
    water?: true
    pipedGas?: true
    furniture?: true
    pet?: true
    condominium?: true
    rent?: true
    iptu?: true
    availability?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImovelMaxAggregateInputType = {
    id?: true
    area?: true
    rooms?: true
    bathroom?: true
    garage?: true
    yard?: true
    ilumination?: true
    water?: true
    pipedGas?: true
    furniture?: true
    pet?: true
    condominium?: true
    rent?: true
    iptu?: true
    availability?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImovelCountAggregateInputType = {
    id?: true
    area?: true
    rooms?: true
    bathroom?: true
    garage?: true
    yard?: true
    ilumination?: true
    water?: true
    pipedGas?: true
    furniture?: true
    pet?: true
    condominium?: true
    rent?: true
    iptu?: true
    availability?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImovelAggregateArgs = {
    /**
     * Filter which Imovel to aggregate.
     * 
    **/
    where?: ImovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imovels to fetch.
     * 
    **/
    orderBy?: Enumerable<ImovelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ImovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imovels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imovels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Imovels
    **/
    _count?: true | ImovelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImovelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImovelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImovelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImovelMaxAggregateInputType
  }

  export type GetImovelAggregateType<T extends ImovelAggregateArgs> = {
        [P in keyof T & keyof AggregateImovel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImovel[P]>
      : GetScalarType<T[P], AggregateImovel[P]>
  }




  export type ImovelGroupByArgs = {
    where?: ImovelWhereInput
    orderBy?: Enumerable<ImovelOrderByWithAggregationInput>
    by: Array<ImovelScalarFieldEnum>
    having?: ImovelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImovelCountAggregateInputType | true
    _avg?: ImovelAvgAggregateInputType
    _sum?: ImovelSumAggregateInputType
    _min?: ImovelMinAggregateInputType
    _max?: ImovelMaxAggregateInputType
  }


  export type ImovelGroupByOutputType = {
    id: number
    area: number
    rooms: number
    bathroom: number
    garage: number
    yard: boolean
    ilumination: amountStatus
    water: amountStatus
    pipedGas: boolean
    furniture: mobiliaStatus
    pet: boolean
    condominium: number
    rent: number
    iptu: number
    availability: boolean
    createdAt: Date
    updatedAt: Date
    _count: ImovelCountAggregateOutputType | null
    _avg: ImovelAvgAggregateOutputType | null
    _sum: ImovelSumAggregateOutputType | null
    _min: ImovelMinAggregateOutputType | null
    _max: ImovelMaxAggregateOutputType | null
  }

  type GetImovelGroupByPayload<T extends ImovelGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ImovelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImovelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImovelGroupByOutputType[P]>
            : GetScalarType<T[P], ImovelGroupByOutputType[P]>
        }
      >
    >


  export type ImovelSelect = {
    id?: boolean
    addressImovel?: boolean | AddressImovelFindManyArgs
    area?: boolean
    rooms?: boolean
    bathroom?: boolean
    garage?: boolean
    yard?: boolean
    ilumination?: boolean
    water?: boolean
    pipedGas?: boolean
    furniture?: boolean
    pet?: boolean
    condominium?: boolean
    rent?: boolean
    iptu?: boolean
    availability?: boolean
    photosImmobile?: boolean | PhotosImmobileFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | ImovelCountOutputTypeArgs
  }

  export type ImovelInclude = {
    addressImovel?: boolean | AddressImovelFindManyArgs
    photosImmobile?: boolean | PhotosImmobileFindManyArgs
    _count?: boolean | ImovelCountOutputTypeArgs
  }

  export type ImovelGetPayload<
    S extends boolean | null | undefined | ImovelArgs,
    U = keyof S
      > = S extends true
        ? Imovel
    : S extends undefined
    ? never
    : S extends ImovelArgs | ImovelFindManyArgs
    ?'include' extends U
    ? Imovel  & {
    [P in TrueKeys<S['include']>]:
        P extends 'addressImovel' ? Array < AddressImovelGetPayload<S['include'][P]>>  :
        P extends 'photosImmobile' ? Array < PhotosImmobileGetPayload<S['include'][P]>>  :
        P extends '_count' ? ImovelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'addressImovel' ? Array < AddressImovelGetPayload<S['select'][P]>>  :
        P extends 'photosImmobile' ? Array < PhotosImmobileGetPayload<S['select'][P]>>  :
        P extends '_count' ? ImovelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Imovel ? Imovel[P] : never
  } 
    : Imovel
  : Imovel


  type ImovelCountArgs = Merge<
    Omit<ImovelFindManyArgs, 'select' | 'include'> & {
      select?: ImovelCountAggregateInputType | true
    }
  >

  export interface ImovelDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Imovel that matches the filter.
     * @param {ImovelFindUniqueArgs} args - Arguments to find a Imovel
     * @example
     * // Get one Imovel
     * const imovel = await prisma.imovel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImovelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImovelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Imovel'> extends True ? CheckSelect<T, Prisma__ImovelClient<Imovel>, Prisma__ImovelClient<ImovelGetPayload<T>>> : CheckSelect<T, Prisma__ImovelClient<Imovel | null >, Prisma__ImovelClient<ImovelGetPayload<T> | null >>

    /**
     * Find the first Imovel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelFindFirstArgs} args - Arguments to find a Imovel
     * @example
     * // Get one Imovel
     * const imovel = await prisma.imovel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImovelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImovelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Imovel'> extends True ? CheckSelect<T, Prisma__ImovelClient<Imovel>, Prisma__ImovelClient<ImovelGetPayload<T>>> : CheckSelect<T, Prisma__ImovelClient<Imovel | null >, Prisma__ImovelClient<ImovelGetPayload<T> | null >>

    /**
     * Find zero or more Imovels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imovels
     * const imovels = await prisma.imovel.findMany()
     * 
     * // Get first 10 Imovels
     * const imovels = await prisma.imovel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imovelWithIdOnly = await prisma.imovel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImovelFindManyArgs>(
      args?: SelectSubset<T, ImovelFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Imovel>>, PrismaPromise<Array<ImovelGetPayload<T>>>>

    /**
     * Create a Imovel.
     * @param {ImovelCreateArgs} args - Arguments to create a Imovel.
     * @example
     * // Create one Imovel
     * const Imovel = await prisma.imovel.create({
     *   data: {
     *     // ... data to create a Imovel
     *   }
     * })
     * 
    **/
    create<T extends ImovelCreateArgs>(
      args: SelectSubset<T, ImovelCreateArgs>
    ): CheckSelect<T, Prisma__ImovelClient<Imovel>, Prisma__ImovelClient<ImovelGetPayload<T>>>

    /**
     * Create many Imovels.
     *     @param {ImovelCreateManyArgs} args - Arguments to create many Imovels.
     *     @example
     *     // Create many Imovels
     *     const imovel = await prisma.imovel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImovelCreateManyArgs>(
      args?: SelectSubset<T, ImovelCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Imovel.
     * @param {ImovelDeleteArgs} args - Arguments to delete one Imovel.
     * @example
     * // Delete one Imovel
     * const Imovel = await prisma.imovel.delete({
     *   where: {
     *     // ... filter to delete one Imovel
     *   }
     * })
     * 
    **/
    delete<T extends ImovelDeleteArgs>(
      args: SelectSubset<T, ImovelDeleteArgs>
    ): CheckSelect<T, Prisma__ImovelClient<Imovel>, Prisma__ImovelClient<ImovelGetPayload<T>>>

    /**
     * Update one Imovel.
     * @param {ImovelUpdateArgs} args - Arguments to update one Imovel.
     * @example
     * // Update one Imovel
     * const imovel = await prisma.imovel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImovelUpdateArgs>(
      args: SelectSubset<T, ImovelUpdateArgs>
    ): CheckSelect<T, Prisma__ImovelClient<Imovel>, Prisma__ImovelClient<ImovelGetPayload<T>>>

    /**
     * Delete zero or more Imovels.
     * @param {ImovelDeleteManyArgs} args - Arguments to filter Imovels to delete.
     * @example
     * // Delete a few Imovels
     * const { count } = await prisma.imovel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImovelDeleteManyArgs>(
      args?: SelectSubset<T, ImovelDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imovels
     * const imovel = await prisma.imovel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImovelUpdateManyArgs>(
      args: SelectSubset<T, ImovelUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Imovel.
     * @param {ImovelUpsertArgs} args - Arguments to update or create a Imovel.
     * @example
     * // Update or create a Imovel
     * const imovel = await prisma.imovel.upsert({
     *   create: {
     *     // ... data to create a Imovel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imovel we want to update
     *   }
     * })
    **/
    upsert<T extends ImovelUpsertArgs>(
      args: SelectSubset<T, ImovelUpsertArgs>
    ): CheckSelect<T, Prisma__ImovelClient<Imovel>, Prisma__ImovelClient<ImovelGetPayload<T>>>

    /**
     * Count the number of Imovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelCountArgs} args - Arguments to filter Imovels to count.
     * @example
     * // Count the number of Imovels
     * const count = await prisma.imovel.count({
     *   where: {
     *     // ... the filter for the Imovels we want to count
     *   }
     * })
    **/
    count<T extends ImovelCountArgs>(
      args?: Subset<T, ImovelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImovelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImovelAggregateArgs>(args: Subset<T, ImovelAggregateArgs>): PrismaPromise<GetImovelAggregateType<T>>

    /**
     * Group by Imovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImovelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImovelGroupByArgs['orderBy'] }
        : { orderBy?: ImovelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImovelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImovelGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Imovel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImovelClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    addressImovel<T extends AddressImovelFindManyArgs = {}>(args?: Subset<T, AddressImovelFindManyArgs>): CheckSelect<T, PrismaPromise<Array<AddressImovel>>, PrismaPromise<Array<AddressImovelGetPayload<T>>>>;

    photosImmobile<T extends PhotosImmobileFindManyArgs = {}>(args?: Subset<T, PhotosImmobileFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PhotosImmobile>>, PrismaPromise<Array<PhotosImmobileGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Imovel findUnique
   */
  export type ImovelFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Imovel
     * 
    **/
    select?: ImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImovelInclude | null
    /**
     * Throw an Error if a Imovel can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Imovel to fetch.
     * 
    **/
    where: ImovelWhereUniqueInput
  }


  /**
   * Imovel findFirst
   */
  export type ImovelFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Imovel
     * 
    **/
    select?: ImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImovelInclude | null
    /**
     * Throw an Error if a Imovel can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Imovel to fetch.
     * 
    **/
    where?: ImovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imovels to fetch.
     * 
    **/
    orderBy?: Enumerable<ImovelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imovels.
     * 
    **/
    cursor?: ImovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imovels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imovels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imovels.
     * 
    **/
    distinct?: Enumerable<ImovelScalarFieldEnum>
  }


  /**
   * Imovel findMany
   */
  export type ImovelFindManyArgs = {
    /**
     * Select specific fields to fetch from the Imovel
     * 
    **/
    select?: ImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImovelInclude | null
    /**
     * Filter, which Imovels to fetch.
     * 
    **/
    where?: ImovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imovels to fetch.
     * 
    **/
    orderBy?: Enumerable<ImovelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Imovels.
     * 
    **/
    cursor?: ImovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imovels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imovels.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ImovelScalarFieldEnum>
  }


  /**
   * Imovel create
   */
  export type ImovelCreateArgs = {
    /**
     * Select specific fields to fetch from the Imovel
     * 
    **/
    select?: ImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImovelInclude | null
    /**
     * The data needed to create a Imovel.
     * 
    **/
    data: XOR<ImovelCreateInput, ImovelUncheckedCreateInput>
  }


  /**
   * Imovel createMany
   */
  export type ImovelCreateManyArgs = {
    /**
     * The data used to create many Imovels.
     * 
    **/
    data: Enumerable<ImovelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Imovel update
   */
  export type ImovelUpdateArgs = {
    /**
     * Select specific fields to fetch from the Imovel
     * 
    **/
    select?: ImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImovelInclude | null
    /**
     * The data needed to update a Imovel.
     * 
    **/
    data: XOR<ImovelUpdateInput, ImovelUncheckedUpdateInput>
    /**
     * Choose, which Imovel to update.
     * 
    **/
    where: ImovelWhereUniqueInput
  }


  /**
   * Imovel updateMany
   */
  export type ImovelUpdateManyArgs = {
    /**
     * The data used to update Imovels.
     * 
    **/
    data: XOR<ImovelUpdateManyMutationInput, ImovelUncheckedUpdateManyInput>
    /**
     * Filter which Imovels to update
     * 
    **/
    where?: ImovelWhereInput
  }


  /**
   * Imovel upsert
   */
  export type ImovelUpsertArgs = {
    /**
     * Select specific fields to fetch from the Imovel
     * 
    **/
    select?: ImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImovelInclude | null
    /**
     * The filter to search for the Imovel to update in case it exists.
     * 
    **/
    where: ImovelWhereUniqueInput
    /**
     * In case the Imovel found by the `where` argument doesn't exist, create a new Imovel with this data.
     * 
    **/
    create: XOR<ImovelCreateInput, ImovelUncheckedCreateInput>
    /**
     * In case the Imovel was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ImovelUpdateInput, ImovelUncheckedUpdateInput>
  }


  /**
   * Imovel delete
   */
  export type ImovelDeleteArgs = {
    /**
     * Select specific fields to fetch from the Imovel
     * 
    **/
    select?: ImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImovelInclude | null
    /**
     * Filter which Imovel to delete.
     * 
    **/
    where: ImovelWhereUniqueInput
  }


  /**
   * Imovel deleteMany
   */
  export type ImovelDeleteManyArgs = {
    /**
     * Filter which Imovels to delete
     * 
    **/
    where?: ImovelWhereInput
  }


  /**
   * Imovel without action
   */
  export type ImovelArgs = {
    /**
     * Select specific fields to fetch from the Imovel
     * 
    **/
    select?: ImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImovelInclude | null
  }



  /**
   * Model AddressImovel
   */


  export type AggregateAddressImovel = {
    _count: AddressImovelCountAggregateOutputType | null
    _avg: AddressImovelAvgAggregateOutputType | null
    _sum: AddressImovelSumAggregateOutputType | null
    _min: AddressImovelMinAggregateOutputType | null
    _max: AddressImovelMaxAggregateOutputType | null
  }

  export type AddressImovelAvgAggregateOutputType = {
    id: number | null
    imovelId: number | null
  }

  export type AddressImovelSumAggregateOutputType = {
    id: number | null
    imovelId: number | null
  }

  export type AddressImovelMinAggregateOutputType = {
    id: number | null
    cep: string | null
    street: string | null
    number: string | null
    neighborhood: string | null
    city: string | null
    state: string | null
    addressDetail: string | null
    imovelId: number | null
  }

  export type AddressImovelMaxAggregateOutputType = {
    id: number | null
    cep: string | null
    street: string | null
    number: string | null
    neighborhood: string | null
    city: string | null
    state: string | null
    addressDetail: string | null
    imovelId: number | null
  }

  export type AddressImovelCountAggregateOutputType = {
    id: number
    cep: number
    street: number
    number: number
    neighborhood: number
    city: number
    state: number
    addressDetail: number
    imovelId: number
    _all: number
  }


  export type AddressImovelAvgAggregateInputType = {
    id?: true
    imovelId?: true
  }

  export type AddressImovelSumAggregateInputType = {
    id?: true
    imovelId?: true
  }

  export type AddressImovelMinAggregateInputType = {
    id?: true
    cep?: true
    street?: true
    number?: true
    neighborhood?: true
    city?: true
    state?: true
    addressDetail?: true
    imovelId?: true
  }

  export type AddressImovelMaxAggregateInputType = {
    id?: true
    cep?: true
    street?: true
    number?: true
    neighborhood?: true
    city?: true
    state?: true
    addressDetail?: true
    imovelId?: true
  }

  export type AddressImovelCountAggregateInputType = {
    id?: true
    cep?: true
    street?: true
    number?: true
    neighborhood?: true
    city?: true
    state?: true
    addressDetail?: true
    imovelId?: true
    _all?: true
  }

  export type AddressImovelAggregateArgs = {
    /**
     * Filter which AddressImovel to aggregate.
     * 
    **/
    where?: AddressImovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddressImovels to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressImovelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AddressImovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddressImovels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddressImovels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddressImovels
    **/
    _count?: true | AddressImovelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressImovelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressImovelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressImovelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressImovelMaxAggregateInputType
  }

  export type GetAddressImovelAggregateType<T extends AddressImovelAggregateArgs> = {
        [P in keyof T & keyof AggregateAddressImovel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddressImovel[P]>
      : GetScalarType<T[P], AggregateAddressImovel[P]>
  }




  export type AddressImovelGroupByArgs = {
    where?: AddressImovelWhereInput
    orderBy?: Enumerable<AddressImovelOrderByWithAggregationInput>
    by: Array<AddressImovelScalarFieldEnum>
    having?: AddressImovelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressImovelCountAggregateInputType | true
    _avg?: AddressImovelAvgAggregateInputType
    _sum?: AddressImovelSumAggregateInputType
    _min?: AddressImovelMinAggregateInputType
    _max?: AddressImovelMaxAggregateInputType
  }


  export type AddressImovelGroupByOutputType = {
    id: number
    cep: string
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
    addressDetail: string | null
    imovelId: number
    _count: AddressImovelCountAggregateOutputType | null
    _avg: AddressImovelAvgAggregateOutputType | null
    _sum: AddressImovelSumAggregateOutputType | null
    _min: AddressImovelMinAggregateOutputType | null
    _max: AddressImovelMaxAggregateOutputType | null
  }

  type GetAddressImovelGroupByPayload<T extends AddressImovelGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AddressImovelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressImovelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressImovelGroupByOutputType[P]>
            : GetScalarType<T[P], AddressImovelGroupByOutputType[P]>
        }
      >
    >


  export type AddressImovelSelect = {
    id?: boolean
    cep?: boolean
    street?: boolean
    number?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    addressDetail?: boolean
    imovelId?: boolean
    Imovel?: boolean | ImovelArgs
  }

  export type AddressImovelInclude = {
    Imovel?: boolean | ImovelArgs
  }

  export type AddressImovelGetPayload<
    S extends boolean | null | undefined | AddressImovelArgs,
    U = keyof S
      > = S extends true
        ? AddressImovel
    : S extends undefined
    ? never
    : S extends AddressImovelArgs | AddressImovelFindManyArgs
    ?'include' extends U
    ? AddressImovel  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Imovel' ? ImovelGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Imovel' ? ImovelGetPayload<S['select'][P]> :  P extends keyof AddressImovel ? AddressImovel[P] : never
  } 
    : AddressImovel
  : AddressImovel


  type AddressImovelCountArgs = Merge<
    Omit<AddressImovelFindManyArgs, 'select' | 'include'> & {
      select?: AddressImovelCountAggregateInputType | true
    }
  >

  export interface AddressImovelDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one AddressImovel that matches the filter.
     * @param {AddressImovelFindUniqueArgs} args - Arguments to find a AddressImovel
     * @example
     * // Get one AddressImovel
     * const addressImovel = await prisma.addressImovel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AddressImovelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AddressImovelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AddressImovel'> extends True ? CheckSelect<T, Prisma__AddressImovelClient<AddressImovel>, Prisma__AddressImovelClient<AddressImovelGetPayload<T>>> : CheckSelect<T, Prisma__AddressImovelClient<AddressImovel | null >, Prisma__AddressImovelClient<AddressImovelGetPayload<T> | null >>

    /**
     * Find the first AddressImovel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressImovelFindFirstArgs} args - Arguments to find a AddressImovel
     * @example
     * // Get one AddressImovel
     * const addressImovel = await prisma.addressImovel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AddressImovelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AddressImovelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AddressImovel'> extends True ? CheckSelect<T, Prisma__AddressImovelClient<AddressImovel>, Prisma__AddressImovelClient<AddressImovelGetPayload<T>>> : CheckSelect<T, Prisma__AddressImovelClient<AddressImovel | null >, Prisma__AddressImovelClient<AddressImovelGetPayload<T> | null >>

    /**
     * Find zero or more AddressImovels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressImovelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddressImovels
     * const addressImovels = await prisma.addressImovel.findMany()
     * 
     * // Get first 10 AddressImovels
     * const addressImovels = await prisma.addressImovel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressImovelWithIdOnly = await prisma.addressImovel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AddressImovelFindManyArgs>(
      args?: SelectSubset<T, AddressImovelFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<AddressImovel>>, PrismaPromise<Array<AddressImovelGetPayload<T>>>>

    /**
     * Create a AddressImovel.
     * @param {AddressImovelCreateArgs} args - Arguments to create a AddressImovel.
     * @example
     * // Create one AddressImovel
     * const AddressImovel = await prisma.addressImovel.create({
     *   data: {
     *     // ... data to create a AddressImovel
     *   }
     * })
     * 
    **/
    create<T extends AddressImovelCreateArgs>(
      args: SelectSubset<T, AddressImovelCreateArgs>
    ): CheckSelect<T, Prisma__AddressImovelClient<AddressImovel>, Prisma__AddressImovelClient<AddressImovelGetPayload<T>>>

    /**
     * Create many AddressImovels.
     *     @param {AddressImovelCreateManyArgs} args - Arguments to create many AddressImovels.
     *     @example
     *     // Create many AddressImovels
     *     const addressImovel = await prisma.addressImovel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AddressImovelCreateManyArgs>(
      args?: SelectSubset<T, AddressImovelCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a AddressImovel.
     * @param {AddressImovelDeleteArgs} args - Arguments to delete one AddressImovel.
     * @example
     * // Delete one AddressImovel
     * const AddressImovel = await prisma.addressImovel.delete({
     *   where: {
     *     // ... filter to delete one AddressImovel
     *   }
     * })
     * 
    **/
    delete<T extends AddressImovelDeleteArgs>(
      args: SelectSubset<T, AddressImovelDeleteArgs>
    ): CheckSelect<T, Prisma__AddressImovelClient<AddressImovel>, Prisma__AddressImovelClient<AddressImovelGetPayload<T>>>

    /**
     * Update one AddressImovel.
     * @param {AddressImovelUpdateArgs} args - Arguments to update one AddressImovel.
     * @example
     * // Update one AddressImovel
     * const addressImovel = await prisma.addressImovel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AddressImovelUpdateArgs>(
      args: SelectSubset<T, AddressImovelUpdateArgs>
    ): CheckSelect<T, Prisma__AddressImovelClient<AddressImovel>, Prisma__AddressImovelClient<AddressImovelGetPayload<T>>>

    /**
     * Delete zero or more AddressImovels.
     * @param {AddressImovelDeleteManyArgs} args - Arguments to filter AddressImovels to delete.
     * @example
     * // Delete a few AddressImovels
     * const { count } = await prisma.addressImovel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AddressImovelDeleteManyArgs>(
      args?: SelectSubset<T, AddressImovelDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddressImovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressImovelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddressImovels
     * const addressImovel = await prisma.addressImovel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AddressImovelUpdateManyArgs>(
      args: SelectSubset<T, AddressImovelUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one AddressImovel.
     * @param {AddressImovelUpsertArgs} args - Arguments to update or create a AddressImovel.
     * @example
     * // Update or create a AddressImovel
     * const addressImovel = await prisma.addressImovel.upsert({
     *   create: {
     *     // ... data to create a AddressImovel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddressImovel we want to update
     *   }
     * })
    **/
    upsert<T extends AddressImovelUpsertArgs>(
      args: SelectSubset<T, AddressImovelUpsertArgs>
    ): CheckSelect<T, Prisma__AddressImovelClient<AddressImovel>, Prisma__AddressImovelClient<AddressImovelGetPayload<T>>>

    /**
     * Count the number of AddressImovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressImovelCountArgs} args - Arguments to filter AddressImovels to count.
     * @example
     * // Count the number of AddressImovels
     * const count = await prisma.addressImovel.count({
     *   where: {
     *     // ... the filter for the AddressImovels we want to count
     *   }
     * })
    **/
    count<T extends AddressImovelCountArgs>(
      args?: Subset<T, AddressImovelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressImovelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddressImovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressImovelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressImovelAggregateArgs>(args: Subset<T, AddressImovelAggregateArgs>): PrismaPromise<GetAddressImovelAggregateType<T>>

    /**
     * Group by AddressImovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressImovelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressImovelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressImovelGroupByArgs['orderBy'] }
        : { orderBy?: AddressImovelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressImovelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressImovelGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddressImovel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AddressImovelClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Imovel<T extends ImovelArgs = {}>(args?: Subset<T, ImovelArgs>): CheckSelect<T, Prisma__ImovelClient<Imovel | null >, Prisma__ImovelClient<ImovelGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * AddressImovel findUnique
   */
  export type AddressImovelFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the AddressImovel
     * 
    **/
    select?: AddressImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressImovelInclude | null
    /**
     * Throw an Error if a AddressImovel can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AddressImovel to fetch.
     * 
    **/
    where: AddressImovelWhereUniqueInput
  }


  /**
   * AddressImovel findFirst
   */
  export type AddressImovelFindFirstArgs = {
    /**
     * Select specific fields to fetch from the AddressImovel
     * 
    **/
    select?: AddressImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressImovelInclude | null
    /**
     * Throw an Error if a AddressImovel can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AddressImovel to fetch.
     * 
    **/
    where?: AddressImovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddressImovels to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressImovelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddressImovels.
     * 
    **/
    cursor?: AddressImovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddressImovels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddressImovels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddressImovels.
     * 
    **/
    distinct?: Enumerable<AddressImovelScalarFieldEnum>
  }


  /**
   * AddressImovel findMany
   */
  export type AddressImovelFindManyArgs = {
    /**
     * Select specific fields to fetch from the AddressImovel
     * 
    **/
    select?: AddressImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressImovelInclude | null
    /**
     * Filter, which AddressImovels to fetch.
     * 
    **/
    where?: AddressImovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddressImovels to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressImovelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddressImovels.
     * 
    **/
    cursor?: AddressImovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddressImovels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddressImovels.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AddressImovelScalarFieldEnum>
  }


  /**
   * AddressImovel create
   */
  export type AddressImovelCreateArgs = {
    /**
     * Select specific fields to fetch from the AddressImovel
     * 
    **/
    select?: AddressImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressImovelInclude | null
    /**
     * The data needed to create a AddressImovel.
     * 
    **/
    data: XOR<AddressImovelCreateInput, AddressImovelUncheckedCreateInput>
  }


  /**
   * AddressImovel createMany
   */
  export type AddressImovelCreateManyArgs = {
    /**
     * The data used to create many AddressImovels.
     * 
    **/
    data: Enumerable<AddressImovelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AddressImovel update
   */
  export type AddressImovelUpdateArgs = {
    /**
     * Select specific fields to fetch from the AddressImovel
     * 
    **/
    select?: AddressImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressImovelInclude | null
    /**
     * The data needed to update a AddressImovel.
     * 
    **/
    data: XOR<AddressImovelUpdateInput, AddressImovelUncheckedUpdateInput>
    /**
     * Choose, which AddressImovel to update.
     * 
    **/
    where: AddressImovelWhereUniqueInput
  }


  /**
   * AddressImovel updateMany
   */
  export type AddressImovelUpdateManyArgs = {
    /**
     * The data used to update AddressImovels.
     * 
    **/
    data: XOR<AddressImovelUpdateManyMutationInput, AddressImovelUncheckedUpdateManyInput>
    /**
     * Filter which AddressImovels to update
     * 
    **/
    where?: AddressImovelWhereInput
  }


  /**
   * AddressImovel upsert
   */
  export type AddressImovelUpsertArgs = {
    /**
     * Select specific fields to fetch from the AddressImovel
     * 
    **/
    select?: AddressImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressImovelInclude | null
    /**
     * The filter to search for the AddressImovel to update in case it exists.
     * 
    **/
    where: AddressImovelWhereUniqueInput
    /**
     * In case the AddressImovel found by the `where` argument doesn't exist, create a new AddressImovel with this data.
     * 
    **/
    create: XOR<AddressImovelCreateInput, AddressImovelUncheckedCreateInput>
    /**
     * In case the AddressImovel was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AddressImovelUpdateInput, AddressImovelUncheckedUpdateInput>
  }


  /**
   * AddressImovel delete
   */
  export type AddressImovelDeleteArgs = {
    /**
     * Select specific fields to fetch from the AddressImovel
     * 
    **/
    select?: AddressImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressImovelInclude | null
    /**
     * Filter which AddressImovel to delete.
     * 
    **/
    where: AddressImovelWhereUniqueInput
  }


  /**
   * AddressImovel deleteMany
   */
  export type AddressImovelDeleteManyArgs = {
    /**
     * Filter which AddressImovels to delete
     * 
    **/
    where?: AddressImovelWhereInput
  }


  /**
   * AddressImovel without action
   */
  export type AddressImovelArgs = {
    /**
     * Select specific fields to fetch from the AddressImovel
     * 
    **/
    select?: AddressImovelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressImovelInclude | null
  }



  /**
   * Model PhotosImmobile
   */


  export type AggregatePhotosImmobile = {
    _count: PhotosImmobileCountAggregateOutputType | null
    _avg: PhotosImmobileAvgAggregateOutputType | null
    _sum: PhotosImmobileSumAggregateOutputType | null
    _min: PhotosImmobileMinAggregateOutputType | null
    _max: PhotosImmobileMaxAggregateOutputType | null
  }

  export type PhotosImmobileAvgAggregateOutputType = {
    id: number | null
    imovelId: number | null
  }

  export type PhotosImmobileSumAggregateOutputType = {
    id: number | null
    imovelId: number | null
  }

  export type PhotosImmobileMinAggregateOutputType = {
    id: number | null
    name: string | null
    imovelId: number | null
  }

  export type PhotosImmobileMaxAggregateOutputType = {
    id: number | null
    name: string | null
    imovelId: number | null
  }

  export type PhotosImmobileCountAggregateOutputType = {
    id: number
    name: number
    imovelId: number
    _all: number
  }


  export type PhotosImmobileAvgAggregateInputType = {
    id?: true
    imovelId?: true
  }

  export type PhotosImmobileSumAggregateInputType = {
    id?: true
    imovelId?: true
  }

  export type PhotosImmobileMinAggregateInputType = {
    id?: true
    name?: true
    imovelId?: true
  }

  export type PhotosImmobileMaxAggregateInputType = {
    id?: true
    name?: true
    imovelId?: true
  }

  export type PhotosImmobileCountAggregateInputType = {
    id?: true
    name?: true
    imovelId?: true
    _all?: true
  }

  export type PhotosImmobileAggregateArgs = {
    /**
     * Filter which PhotosImmobile to aggregate.
     * 
    **/
    where?: PhotosImmobileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotosImmobiles to fetch.
     * 
    **/
    orderBy?: Enumerable<PhotosImmobileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PhotosImmobileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotosImmobiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotosImmobiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhotosImmobiles
    **/
    _count?: true | PhotosImmobileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotosImmobileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotosImmobileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotosImmobileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotosImmobileMaxAggregateInputType
  }

  export type GetPhotosImmobileAggregateType<T extends PhotosImmobileAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotosImmobile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotosImmobile[P]>
      : GetScalarType<T[P], AggregatePhotosImmobile[P]>
  }




  export type PhotosImmobileGroupByArgs = {
    where?: PhotosImmobileWhereInput
    orderBy?: Enumerable<PhotosImmobileOrderByWithAggregationInput>
    by: Array<PhotosImmobileScalarFieldEnum>
    having?: PhotosImmobileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotosImmobileCountAggregateInputType | true
    _avg?: PhotosImmobileAvgAggregateInputType
    _sum?: PhotosImmobileSumAggregateInputType
    _min?: PhotosImmobileMinAggregateInputType
    _max?: PhotosImmobileMaxAggregateInputType
  }


  export type PhotosImmobileGroupByOutputType = {
    id: number
    name: string
    imovelId: number
    _count: PhotosImmobileCountAggregateOutputType | null
    _avg: PhotosImmobileAvgAggregateOutputType | null
    _sum: PhotosImmobileSumAggregateOutputType | null
    _min: PhotosImmobileMinAggregateOutputType | null
    _max: PhotosImmobileMaxAggregateOutputType | null
  }

  type GetPhotosImmobileGroupByPayload<T extends PhotosImmobileGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PhotosImmobileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotosImmobileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotosImmobileGroupByOutputType[P]>
            : GetScalarType<T[P], PhotosImmobileGroupByOutputType[P]>
        }
      >
    >


  export type PhotosImmobileSelect = {
    id?: boolean
    imovel?: boolean | ImovelArgs
    name?: boolean
    imovelId?: boolean
  }

  export type PhotosImmobileInclude = {
    imovel?: boolean | ImovelArgs
  }

  export type PhotosImmobileGetPayload<
    S extends boolean | null | undefined | PhotosImmobileArgs,
    U = keyof S
      > = S extends true
        ? PhotosImmobile
    : S extends undefined
    ? never
    : S extends PhotosImmobileArgs | PhotosImmobileFindManyArgs
    ?'include' extends U
    ? PhotosImmobile  & {
    [P in TrueKeys<S['include']>]:
        P extends 'imovel' ? ImovelGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'imovel' ? ImovelGetPayload<S['select'][P]> :  P extends keyof PhotosImmobile ? PhotosImmobile[P] : never
  } 
    : PhotosImmobile
  : PhotosImmobile


  type PhotosImmobileCountArgs = Merge<
    Omit<PhotosImmobileFindManyArgs, 'select' | 'include'> & {
      select?: PhotosImmobileCountAggregateInputType | true
    }
  >

  export interface PhotosImmobileDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PhotosImmobile that matches the filter.
     * @param {PhotosImmobileFindUniqueArgs} args - Arguments to find a PhotosImmobile
     * @example
     * // Get one PhotosImmobile
     * const photosImmobile = await prisma.photosImmobile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PhotosImmobileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PhotosImmobileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PhotosImmobile'> extends True ? CheckSelect<T, Prisma__PhotosImmobileClient<PhotosImmobile>, Prisma__PhotosImmobileClient<PhotosImmobileGetPayload<T>>> : CheckSelect<T, Prisma__PhotosImmobileClient<PhotosImmobile | null >, Prisma__PhotosImmobileClient<PhotosImmobileGetPayload<T> | null >>

    /**
     * Find the first PhotosImmobile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosImmobileFindFirstArgs} args - Arguments to find a PhotosImmobile
     * @example
     * // Get one PhotosImmobile
     * const photosImmobile = await prisma.photosImmobile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PhotosImmobileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PhotosImmobileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PhotosImmobile'> extends True ? CheckSelect<T, Prisma__PhotosImmobileClient<PhotosImmobile>, Prisma__PhotosImmobileClient<PhotosImmobileGetPayload<T>>> : CheckSelect<T, Prisma__PhotosImmobileClient<PhotosImmobile | null >, Prisma__PhotosImmobileClient<PhotosImmobileGetPayload<T> | null >>

    /**
     * Find zero or more PhotosImmobiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosImmobileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotosImmobiles
     * const photosImmobiles = await prisma.photosImmobile.findMany()
     * 
     * // Get first 10 PhotosImmobiles
     * const photosImmobiles = await prisma.photosImmobile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photosImmobileWithIdOnly = await prisma.photosImmobile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PhotosImmobileFindManyArgs>(
      args?: SelectSubset<T, PhotosImmobileFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PhotosImmobile>>, PrismaPromise<Array<PhotosImmobileGetPayload<T>>>>

    /**
     * Create a PhotosImmobile.
     * @param {PhotosImmobileCreateArgs} args - Arguments to create a PhotosImmobile.
     * @example
     * // Create one PhotosImmobile
     * const PhotosImmobile = await prisma.photosImmobile.create({
     *   data: {
     *     // ... data to create a PhotosImmobile
     *   }
     * })
     * 
    **/
    create<T extends PhotosImmobileCreateArgs>(
      args: SelectSubset<T, PhotosImmobileCreateArgs>
    ): CheckSelect<T, Prisma__PhotosImmobileClient<PhotosImmobile>, Prisma__PhotosImmobileClient<PhotosImmobileGetPayload<T>>>

    /**
     * Create many PhotosImmobiles.
     *     @param {PhotosImmobileCreateManyArgs} args - Arguments to create many PhotosImmobiles.
     *     @example
     *     // Create many PhotosImmobiles
     *     const photosImmobile = await prisma.photosImmobile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PhotosImmobileCreateManyArgs>(
      args?: SelectSubset<T, PhotosImmobileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PhotosImmobile.
     * @param {PhotosImmobileDeleteArgs} args - Arguments to delete one PhotosImmobile.
     * @example
     * // Delete one PhotosImmobile
     * const PhotosImmobile = await prisma.photosImmobile.delete({
     *   where: {
     *     // ... filter to delete one PhotosImmobile
     *   }
     * })
     * 
    **/
    delete<T extends PhotosImmobileDeleteArgs>(
      args: SelectSubset<T, PhotosImmobileDeleteArgs>
    ): CheckSelect<T, Prisma__PhotosImmobileClient<PhotosImmobile>, Prisma__PhotosImmobileClient<PhotosImmobileGetPayload<T>>>

    /**
     * Update one PhotosImmobile.
     * @param {PhotosImmobileUpdateArgs} args - Arguments to update one PhotosImmobile.
     * @example
     * // Update one PhotosImmobile
     * const photosImmobile = await prisma.photosImmobile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PhotosImmobileUpdateArgs>(
      args: SelectSubset<T, PhotosImmobileUpdateArgs>
    ): CheckSelect<T, Prisma__PhotosImmobileClient<PhotosImmobile>, Prisma__PhotosImmobileClient<PhotosImmobileGetPayload<T>>>

    /**
     * Delete zero or more PhotosImmobiles.
     * @param {PhotosImmobileDeleteManyArgs} args - Arguments to filter PhotosImmobiles to delete.
     * @example
     * // Delete a few PhotosImmobiles
     * const { count } = await prisma.photosImmobile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PhotosImmobileDeleteManyArgs>(
      args?: SelectSubset<T, PhotosImmobileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotosImmobiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosImmobileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotosImmobiles
     * const photosImmobile = await prisma.photosImmobile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PhotosImmobileUpdateManyArgs>(
      args: SelectSubset<T, PhotosImmobileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PhotosImmobile.
     * @param {PhotosImmobileUpsertArgs} args - Arguments to update or create a PhotosImmobile.
     * @example
     * // Update or create a PhotosImmobile
     * const photosImmobile = await prisma.photosImmobile.upsert({
     *   create: {
     *     // ... data to create a PhotosImmobile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotosImmobile we want to update
     *   }
     * })
    **/
    upsert<T extends PhotosImmobileUpsertArgs>(
      args: SelectSubset<T, PhotosImmobileUpsertArgs>
    ): CheckSelect<T, Prisma__PhotosImmobileClient<PhotosImmobile>, Prisma__PhotosImmobileClient<PhotosImmobileGetPayload<T>>>

    /**
     * Count the number of PhotosImmobiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosImmobileCountArgs} args - Arguments to filter PhotosImmobiles to count.
     * @example
     * // Count the number of PhotosImmobiles
     * const count = await prisma.photosImmobile.count({
     *   where: {
     *     // ... the filter for the PhotosImmobiles we want to count
     *   }
     * })
    **/
    count<T extends PhotosImmobileCountArgs>(
      args?: Subset<T, PhotosImmobileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotosImmobileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotosImmobile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosImmobileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotosImmobileAggregateArgs>(args: Subset<T, PhotosImmobileAggregateArgs>): PrismaPromise<GetPhotosImmobileAggregateType<T>>

    /**
     * Group by PhotosImmobile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosImmobileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotosImmobileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotosImmobileGroupByArgs['orderBy'] }
        : { orderBy?: PhotosImmobileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotosImmobileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotosImmobileGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotosImmobile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PhotosImmobileClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    imovel<T extends ImovelArgs = {}>(args?: Subset<T, ImovelArgs>): CheckSelect<T, Prisma__ImovelClient<Imovel | null >, Prisma__ImovelClient<ImovelGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PhotosImmobile findUnique
   */
  export type PhotosImmobileFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PhotosImmobile
     * 
    **/
    select?: PhotosImmobileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosImmobileInclude | null
    /**
     * Throw an Error if a PhotosImmobile can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PhotosImmobile to fetch.
     * 
    **/
    where: PhotosImmobileWhereUniqueInput
  }


  /**
   * PhotosImmobile findFirst
   */
  export type PhotosImmobileFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PhotosImmobile
     * 
    **/
    select?: PhotosImmobileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosImmobileInclude | null
    /**
     * Throw an Error if a PhotosImmobile can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PhotosImmobile to fetch.
     * 
    **/
    where?: PhotosImmobileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotosImmobiles to fetch.
     * 
    **/
    orderBy?: Enumerable<PhotosImmobileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotosImmobiles.
     * 
    **/
    cursor?: PhotosImmobileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotosImmobiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotosImmobiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotosImmobiles.
     * 
    **/
    distinct?: Enumerable<PhotosImmobileScalarFieldEnum>
  }


  /**
   * PhotosImmobile findMany
   */
  export type PhotosImmobileFindManyArgs = {
    /**
     * Select specific fields to fetch from the PhotosImmobile
     * 
    **/
    select?: PhotosImmobileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosImmobileInclude | null
    /**
     * Filter, which PhotosImmobiles to fetch.
     * 
    **/
    where?: PhotosImmobileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotosImmobiles to fetch.
     * 
    **/
    orderBy?: Enumerable<PhotosImmobileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhotosImmobiles.
     * 
    **/
    cursor?: PhotosImmobileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotosImmobiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotosImmobiles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PhotosImmobileScalarFieldEnum>
  }


  /**
   * PhotosImmobile create
   */
  export type PhotosImmobileCreateArgs = {
    /**
     * Select specific fields to fetch from the PhotosImmobile
     * 
    **/
    select?: PhotosImmobileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosImmobileInclude | null
    /**
     * The data needed to create a PhotosImmobile.
     * 
    **/
    data: XOR<PhotosImmobileCreateInput, PhotosImmobileUncheckedCreateInput>
  }


  /**
   * PhotosImmobile createMany
   */
  export type PhotosImmobileCreateManyArgs = {
    /**
     * The data used to create many PhotosImmobiles.
     * 
    **/
    data: Enumerable<PhotosImmobileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PhotosImmobile update
   */
  export type PhotosImmobileUpdateArgs = {
    /**
     * Select specific fields to fetch from the PhotosImmobile
     * 
    **/
    select?: PhotosImmobileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosImmobileInclude | null
    /**
     * The data needed to update a PhotosImmobile.
     * 
    **/
    data: XOR<PhotosImmobileUpdateInput, PhotosImmobileUncheckedUpdateInput>
    /**
     * Choose, which PhotosImmobile to update.
     * 
    **/
    where: PhotosImmobileWhereUniqueInput
  }


  /**
   * PhotosImmobile updateMany
   */
  export type PhotosImmobileUpdateManyArgs = {
    /**
     * The data used to update PhotosImmobiles.
     * 
    **/
    data: XOR<PhotosImmobileUpdateManyMutationInput, PhotosImmobileUncheckedUpdateManyInput>
    /**
     * Filter which PhotosImmobiles to update
     * 
    **/
    where?: PhotosImmobileWhereInput
  }


  /**
   * PhotosImmobile upsert
   */
  export type PhotosImmobileUpsertArgs = {
    /**
     * Select specific fields to fetch from the PhotosImmobile
     * 
    **/
    select?: PhotosImmobileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosImmobileInclude | null
    /**
     * The filter to search for the PhotosImmobile to update in case it exists.
     * 
    **/
    where: PhotosImmobileWhereUniqueInput
    /**
     * In case the PhotosImmobile found by the `where` argument doesn't exist, create a new PhotosImmobile with this data.
     * 
    **/
    create: XOR<PhotosImmobileCreateInput, PhotosImmobileUncheckedCreateInput>
    /**
     * In case the PhotosImmobile was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PhotosImmobileUpdateInput, PhotosImmobileUncheckedUpdateInput>
  }


  /**
   * PhotosImmobile delete
   */
  export type PhotosImmobileDeleteArgs = {
    /**
     * Select specific fields to fetch from the PhotosImmobile
     * 
    **/
    select?: PhotosImmobileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosImmobileInclude | null
    /**
     * Filter which PhotosImmobile to delete.
     * 
    **/
    where: PhotosImmobileWhereUniqueInput
  }


  /**
   * PhotosImmobile deleteMany
   */
  export type PhotosImmobileDeleteManyArgs = {
    /**
     * Filter which PhotosImmobiles to delete
     * 
    **/
    where?: PhotosImmobileWhereInput
  }


  /**
   * PhotosImmobile without action
   */
  export type PhotosImmobileArgs = {
    /**
     * Select specific fields to fetch from the PhotosImmobile
     * 
    **/
    select?: PhotosImmobileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosImmobileInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    birthday: 'birthday',
    phone: 'phone',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    cep: 'cep',
    street: 'street',
    city: 'city',
    state: 'state',
    number: 'number',
    neighborhood: 'neighborhood',
    addressDetail: 'addressDetail',
    enrollmentId: 'enrollmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const ImovelScalarFieldEnum: {
    id: 'id',
    area: 'area',
    rooms: 'rooms',
    bathroom: 'bathroom',
    garage: 'garage',
    yard: 'yard',
    ilumination: 'ilumination',
    water: 'water',
    pipedGas: 'pipedGas',
    furniture: 'furniture',
    pet: 'pet',
    condominium: 'condominium',
    rent: 'rent',
    iptu: 'iptu',
    availability: 'availability',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImovelScalarFieldEnum = (typeof ImovelScalarFieldEnum)[keyof typeof ImovelScalarFieldEnum]


  export const AddressImovelScalarFieldEnum: {
    id: 'id',
    cep: 'cep',
    street: 'street',
    number: 'number',
    neighborhood: 'neighborhood',
    city: 'city',
    state: 'state',
    addressDetail: 'addressDetail',
    imovelId: 'imovelId'
  };

  export type AddressImovelScalarFieldEnum = (typeof AddressImovelScalarFieldEnum)[keyof typeof AddressImovelScalarFieldEnum]


  export const PhotosImmobileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imovelId: 'imovelId'
  };

  export type PhotosImmobileScalarFieldEnum = (typeof PhotosImmobileScalarFieldEnum)[keyof typeof PhotosImmobileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Session?: SessionListRelationFilter
    Enrollment?: EnrollmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Session?: SessionOrderByRelationAggregateInput
    Enrollment?: EnrollmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    token?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionWhereUniqueInput = {
    id?: number
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    token?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EnrollmentWhereInput = {
    AND?: Enumerable<EnrollmentWhereInput>
    OR?: Enumerable<EnrollmentWhereInput>
    NOT?: Enumerable<EnrollmentWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    cpf?: StringFilter | string
    birthday?: DateTimeFilter | Date | string
    phone?: StringFilter | string
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    Address?: AddressListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    Address?: AddressOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentWhereUniqueInput = {
    id?: number
    userId?: number
  }

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EnrollmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<EnrollmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EnrollmentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    cpf?: StringWithAggregatesFilter | string
    birthday?: DateTimeWithAggregatesFilter | Date | string
    phone?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AddressWhereInput = {
    AND?: Enumerable<AddressWhereInput>
    OR?: Enumerable<AddressWhereInput>
    NOT?: Enumerable<AddressWhereInput>
    id?: IntFilter | number
    cep?: StringFilter | string
    street?: StringFilter | string
    city?: StringFilter | string
    state?: StringFilter | string
    number?: StringFilter | string
    neighborhood?: StringFilter | string
    addressDetail?: StringNullableFilter | string | null
    enrollmentId?: IntFilter | number
    Enrollment?: XOR<EnrollmentRelationFilter, EnrollmentWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    addressDetail?: SortOrder
    enrollmentId?: SortOrder
    Enrollment?: EnrollmentOrderByWithRelationInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressWhereUniqueInput = {
    id?: number
    enrollmentId?: number
  }

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    addressDetail?: SortOrder
    enrollmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AddressScalarWhereWithAggregatesInput>
    OR?: Enumerable<AddressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AddressScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    cep?: StringWithAggregatesFilter | string
    street?: StringWithAggregatesFilter | string
    city?: StringWithAggregatesFilter | string
    state?: StringWithAggregatesFilter | string
    number?: StringWithAggregatesFilter | string
    neighborhood?: StringWithAggregatesFilter | string
    addressDetail?: StringNullableWithAggregatesFilter | string | null
    enrollmentId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ImovelWhereInput = {
    AND?: Enumerable<ImovelWhereInput>
    OR?: Enumerable<ImovelWhereInput>
    NOT?: Enumerable<ImovelWhereInput>
    id?: IntFilter | number
    addressImovel?: AddressImovelListRelationFilter
    area?: IntFilter | number
    rooms?: IntFilter | number
    bathroom?: IntFilter | number
    garage?: IntFilter | number
    yard?: BoolFilter | boolean
    ilumination?: EnumamountStatusFilter | amountStatus
    water?: EnumamountStatusFilter | amountStatus
    pipedGas?: BoolFilter | boolean
    furniture?: EnummobiliaStatusFilter | mobiliaStatus
    pet?: BoolFilter | boolean
    condominium?: IntFilter | number
    rent?: IntFilter | number
    iptu?: IntFilter | number
    availability?: BoolFilter | boolean
    photosImmobile?: PhotosImmobileListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ImovelOrderByWithRelationInput = {
    id?: SortOrder
    addressImovel?: AddressImovelOrderByRelationAggregateInput
    area?: SortOrder
    rooms?: SortOrder
    bathroom?: SortOrder
    garage?: SortOrder
    yard?: SortOrder
    ilumination?: SortOrder
    water?: SortOrder
    pipedGas?: SortOrder
    furniture?: SortOrder
    pet?: SortOrder
    condominium?: SortOrder
    rent?: SortOrder
    iptu?: SortOrder
    availability?: SortOrder
    photosImmobile?: PhotosImmobileOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImovelWhereUniqueInput = {
    id?: number
  }

  export type ImovelOrderByWithAggregationInput = {
    id?: SortOrder
    area?: SortOrder
    rooms?: SortOrder
    bathroom?: SortOrder
    garage?: SortOrder
    yard?: SortOrder
    ilumination?: SortOrder
    water?: SortOrder
    pipedGas?: SortOrder
    furniture?: SortOrder
    pet?: SortOrder
    condominium?: SortOrder
    rent?: SortOrder
    iptu?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImovelCountOrderByAggregateInput
    _avg?: ImovelAvgOrderByAggregateInput
    _max?: ImovelMaxOrderByAggregateInput
    _min?: ImovelMinOrderByAggregateInput
    _sum?: ImovelSumOrderByAggregateInput
  }

  export type ImovelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImovelScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImovelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImovelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    area?: IntWithAggregatesFilter | number
    rooms?: IntWithAggregatesFilter | number
    bathroom?: IntWithAggregatesFilter | number
    garage?: IntWithAggregatesFilter | number
    yard?: BoolWithAggregatesFilter | boolean
    ilumination?: EnumamountStatusWithAggregatesFilter | amountStatus
    water?: EnumamountStatusWithAggregatesFilter | amountStatus
    pipedGas?: BoolWithAggregatesFilter | boolean
    furniture?: EnummobiliaStatusWithAggregatesFilter | mobiliaStatus
    pet?: BoolWithAggregatesFilter | boolean
    condominium?: IntWithAggregatesFilter | number
    rent?: IntWithAggregatesFilter | number
    iptu?: IntWithAggregatesFilter | number
    availability?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AddressImovelWhereInput = {
    AND?: Enumerable<AddressImovelWhereInput>
    OR?: Enumerable<AddressImovelWhereInput>
    NOT?: Enumerable<AddressImovelWhereInput>
    id?: IntFilter | number
    cep?: StringFilter | string
    street?: StringFilter | string
    number?: StringFilter | string
    neighborhood?: StringFilter | string
    city?: StringFilter | string
    state?: StringFilter | string
    addressDetail?: StringNullableFilter | string | null
    imovelId?: IntFilter | number
    Imovel?: XOR<ImovelRelationFilter, ImovelWhereInput>
  }

  export type AddressImovelOrderByWithRelationInput = {
    id?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    addressDetail?: SortOrder
    imovelId?: SortOrder
    Imovel?: ImovelOrderByWithRelationInput
  }

  export type AddressImovelWhereUniqueInput = {
    id?: number
    imovelId?: number
  }

  export type AddressImovelOrderByWithAggregationInput = {
    id?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    addressDetail?: SortOrder
    imovelId?: SortOrder
    _count?: AddressImovelCountOrderByAggregateInput
    _avg?: AddressImovelAvgOrderByAggregateInput
    _max?: AddressImovelMaxOrderByAggregateInput
    _min?: AddressImovelMinOrderByAggregateInput
    _sum?: AddressImovelSumOrderByAggregateInput
  }

  export type AddressImovelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AddressImovelScalarWhereWithAggregatesInput>
    OR?: Enumerable<AddressImovelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AddressImovelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    cep?: StringWithAggregatesFilter | string
    street?: StringWithAggregatesFilter | string
    number?: StringWithAggregatesFilter | string
    neighborhood?: StringWithAggregatesFilter | string
    city?: StringWithAggregatesFilter | string
    state?: StringWithAggregatesFilter | string
    addressDetail?: StringNullableWithAggregatesFilter | string | null
    imovelId?: IntWithAggregatesFilter | number
  }

  export type PhotosImmobileWhereInput = {
    AND?: Enumerable<PhotosImmobileWhereInput>
    OR?: Enumerable<PhotosImmobileWhereInput>
    NOT?: Enumerable<PhotosImmobileWhereInput>
    id?: IntFilter | number
    imovel?: XOR<ImovelRelationFilter, ImovelWhereInput>
    name?: StringFilter | string
    imovelId?: IntFilter | number
  }

  export type PhotosImmobileOrderByWithRelationInput = {
    id?: SortOrder
    imovel?: ImovelOrderByWithRelationInput
    name?: SortOrder
    imovelId?: SortOrder
  }

  export type PhotosImmobileWhereUniqueInput = {
    id?: number
  }

  export type PhotosImmobileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imovelId?: SortOrder
    _count?: PhotosImmobileCountOrderByAggregateInput
    _avg?: PhotosImmobileAvgOrderByAggregateInput
    _max?: PhotosImmobileMaxOrderByAggregateInput
    _min?: PhotosImmobileMinOrderByAggregateInput
    _sum?: PhotosImmobileSumOrderByAggregateInput
  }

  export type PhotosImmobileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PhotosImmobileScalarWhereWithAggregatesInput>
    OR?: Enumerable<PhotosImmobileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PhotosImmobileScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    imovelId?: IntWithAggregatesFilter | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Session?: SessionCreateNestedManyWithoutUserInput
    Enrollment?: EnrollmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Session?: SessionUpdateManyWithoutUserInput
    Enrollment?: EnrollmentUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Session?: SessionUncheckedUpdateManyWithoutUserInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    User: UserCreateNestedOneWithoutSessionInput
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    userId: number
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    User?: UserUpdateOneRequiredWithoutSessionInput
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: number
    userId: number
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateInput = {
    name: string
    cpf: string
    birthday: Date | string
    phone: string
    User: UserCreateNestedOneWithoutEnrollmentInput
    Address?: AddressCreateNestedManyWithoutEnrollmentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: number
    name: string
    cpf: string
    birthday: Date | string
    phone: string
    userId: number
    Address?: AddressUncheckedCreateNestedManyWithoutEnrollmentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutEnrollmentInput
    Address?: AddressUpdateManyWithoutEnrollmentInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    Address?: AddressUncheckedUpdateManyWithoutEnrollmentInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyInput = {
    id?: number
    name: string
    cpf: string
    birthday: Date | string
    phone: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    cep: string
    street: string
    city: string
    state: string
    number: string
    neighborhood: string
    addressDetail?: string | null
    Enrollment: EnrollmentCreateNestedOneWithoutAddressInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    cep: string
    street: string
    city: string
    state: string
    number: string
    neighborhood: string
    addressDetail?: string | null
    enrollmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateInput = {
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    Enrollment?: EnrollmentUpdateOneRequiredWithoutAddressInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateManyInput = {
    id?: number
    cep: string
    street: string
    city: string
    state: string
    number: string
    neighborhood: string
    addressDetail?: string | null
    enrollmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImovelCreateInput = {
    addressImovel?: AddressImovelCreateNestedManyWithoutImovelInput
    area: number
    rooms: number
    bathroom: number
    garage: number
    yard: boolean
    ilumination: amountStatus
    water: amountStatus
    pipedGas: boolean
    furniture: mobiliaStatus
    pet: boolean
    condominium: number
    rent: number
    iptu: number
    availability: boolean
    photosImmobile?: PhotosImmobileCreateNestedManyWithoutImovelInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImovelUncheckedCreateInput = {
    id?: number
    addressImovel?: AddressImovelUncheckedCreateNestedManyWithoutImovelInput
    area: number
    rooms: number
    bathroom: number
    garage: number
    yard: boolean
    ilumination: amountStatus
    water: amountStatus
    pipedGas: boolean
    furniture: mobiliaStatus
    pet: boolean
    condominium: number
    rent: number
    iptu: number
    availability: boolean
    photosImmobile?: PhotosImmobileUncheckedCreateNestedManyWithoutImovelInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImovelUpdateInput = {
    addressImovel?: AddressImovelUpdateManyWithoutImovelInput
    area?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    bathroom?: IntFieldUpdateOperationsInput | number
    garage?: IntFieldUpdateOperationsInput | number
    yard?: BoolFieldUpdateOperationsInput | boolean
    ilumination?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    water?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    pipedGas?: BoolFieldUpdateOperationsInput | boolean
    furniture?: EnummobiliaStatusFieldUpdateOperationsInput | mobiliaStatus
    pet?: BoolFieldUpdateOperationsInput | boolean
    condominium?: IntFieldUpdateOperationsInput | number
    rent?: IntFieldUpdateOperationsInput | number
    iptu?: IntFieldUpdateOperationsInput | number
    availability?: BoolFieldUpdateOperationsInput | boolean
    photosImmobile?: PhotosImmobileUpdateManyWithoutImovelInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImovelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    addressImovel?: AddressImovelUncheckedUpdateManyWithoutImovelInput
    area?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    bathroom?: IntFieldUpdateOperationsInput | number
    garage?: IntFieldUpdateOperationsInput | number
    yard?: BoolFieldUpdateOperationsInput | boolean
    ilumination?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    water?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    pipedGas?: BoolFieldUpdateOperationsInput | boolean
    furniture?: EnummobiliaStatusFieldUpdateOperationsInput | mobiliaStatus
    pet?: BoolFieldUpdateOperationsInput | boolean
    condominium?: IntFieldUpdateOperationsInput | number
    rent?: IntFieldUpdateOperationsInput | number
    iptu?: IntFieldUpdateOperationsInput | number
    availability?: BoolFieldUpdateOperationsInput | boolean
    photosImmobile?: PhotosImmobileUncheckedUpdateManyWithoutImovelInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImovelCreateManyInput = {
    id?: number
    area: number
    rooms: number
    bathroom: number
    garage: number
    yard: boolean
    ilumination: amountStatus
    water: amountStatus
    pipedGas: boolean
    furniture: mobiliaStatus
    pet: boolean
    condominium: number
    rent: number
    iptu: number
    availability: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImovelUpdateManyMutationInput = {
    area?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    bathroom?: IntFieldUpdateOperationsInput | number
    garage?: IntFieldUpdateOperationsInput | number
    yard?: BoolFieldUpdateOperationsInput | boolean
    ilumination?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    water?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    pipedGas?: BoolFieldUpdateOperationsInput | boolean
    furniture?: EnummobiliaStatusFieldUpdateOperationsInput | mobiliaStatus
    pet?: BoolFieldUpdateOperationsInput | boolean
    condominium?: IntFieldUpdateOperationsInput | number
    rent?: IntFieldUpdateOperationsInput | number
    iptu?: IntFieldUpdateOperationsInput | number
    availability?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImovelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    bathroom?: IntFieldUpdateOperationsInput | number
    garage?: IntFieldUpdateOperationsInput | number
    yard?: BoolFieldUpdateOperationsInput | boolean
    ilumination?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    water?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    pipedGas?: BoolFieldUpdateOperationsInput | boolean
    furniture?: EnummobiliaStatusFieldUpdateOperationsInput | mobiliaStatus
    pet?: BoolFieldUpdateOperationsInput | boolean
    condominium?: IntFieldUpdateOperationsInput | number
    rent?: IntFieldUpdateOperationsInput | number
    iptu?: IntFieldUpdateOperationsInput | number
    availability?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressImovelCreateInput = {
    cep: string
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
    addressDetail?: string | null
    Imovel: ImovelCreateNestedOneWithoutAddressImovelInput
  }

  export type AddressImovelUncheckedCreateInput = {
    id?: number
    cep: string
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
    addressDetail?: string | null
    imovelId: number
  }

  export type AddressImovelUpdateInput = {
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    Imovel?: ImovelUpdateOneRequiredWithoutAddressImovelInput
  }

  export type AddressImovelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    imovelId?: IntFieldUpdateOperationsInput | number
  }

  export type AddressImovelCreateManyInput = {
    id?: number
    cep: string
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
    addressDetail?: string | null
    imovelId: number
  }

  export type AddressImovelUpdateManyMutationInput = {
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressImovelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    imovelId?: IntFieldUpdateOperationsInput | number
  }

  export type PhotosImmobileCreateInput = {
    imovel: ImovelCreateNestedOneWithoutPhotosImmobileInput
    name: string
  }

  export type PhotosImmobileUncheckedCreateInput = {
    id?: number
    name: string
    imovelId: number
  }

  export type PhotosImmobileUpdateInput = {
    imovel?: ImovelUpdateOneRequiredWithoutPhotosImmobileInput
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PhotosImmobileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imovelId?: IntFieldUpdateOperationsInput | number
  }

  export type PhotosImmobileCreateManyInput = {
    id?: number
    name: string
    imovelId: number
  }

  export type PhotosImmobileUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PhotosImmobileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imovelId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type EnrollmentRelationFilter = {
    is?: EnrollmentWhereInput
    isNot?: EnrollmentWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    addressDetail?: SortOrder
    enrollmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    addressDetail?: SortOrder
    enrollmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    addressDetail?: SortOrder
    enrollmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type AddressImovelListRelationFilter = {
    every?: AddressImovelWhereInput
    some?: AddressImovelWhereInput
    none?: AddressImovelWhereInput
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type EnumamountStatusFilter = {
    equals?: amountStatus
    in?: Enumerable<amountStatus>
    notIn?: Enumerable<amountStatus>
    not?: NestedEnumamountStatusFilter | amountStatus
  }

  export type EnummobiliaStatusFilter = {
    equals?: mobiliaStatus
    in?: Enumerable<mobiliaStatus>
    notIn?: Enumerable<mobiliaStatus>
    not?: NestedEnummobiliaStatusFilter | mobiliaStatus
  }

  export type PhotosImmobileListRelationFilter = {
    every?: PhotosImmobileWhereInput
    some?: PhotosImmobileWhereInput
    none?: PhotosImmobileWhereInput
  }

  export type AddressImovelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotosImmobileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImovelCountOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
    rooms?: SortOrder
    bathroom?: SortOrder
    garage?: SortOrder
    yard?: SortOrder
    ilumination?: SortOrder
    water?: SortOrder
    pipedGas?: SortOrder
    furniture?: SortOrder
    pet?: SortOrder
    condominium?: SortOrder
    rent?: SortOrder
    iptu?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImovelAvgOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
    rooms?: SortOrder
    bathroom?: SortOrder
    garage?: SortOrder
    condominium?: SortOrder
    rent?: SortOrder
    iptu?: SortOrder
  }

  export type ImovelMaxOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
    rooms?: SortOrder
    bathroom?: SortOrder
    garage?: SortOrder
    yard?: SortOrder
    ilumination?: SortOrder
    water?: SortOrder
    pipedGas?: SortOrder
    furniture?: SortOrder
    pet?: SortOrder
    condominium?: SortOrder
    rent?: SortOrder
    iptu?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImovelMinOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
    rooms?: SortOrder
    bathroom?: SortOrder
    garage?: SortOrder
    yard?: SortOrder
    ilumination?: SortOrder
    water?: SortOrder
    pipedGas?: SortOrder
    furniture?: SortOrder
    pet?: SortOrder
    condominium?: SortOrder
    rent?: SortOrder
    iptu?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImovelSumOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
    rooms?: SortOrder
    bathroom?: SortOrder
    garage?: SortOrder
    condominium?: SortOrder
    rent?: SortOrder
    iptu?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type EnumamountStatusWithAggregatesFilter = {
    equals?: amountStatus
    in?: Enumerable<amountStatus>
    notIn?: Enumerable<amountStatus>
    not?: NestedEnumamountStatusWithAggregatesFilter | amountStatus
    _count?: NestedIntFilter
    _min?: NestedEnumamountStatusFilter
    _max?: NestedEnumamountStatusFilter
  }

  export type EnummobiliaStatusWithAggregatesFilter = {
    equals?: mobiliaStatus
    in?: Enumerable<mobiliaStatus>
    notIn?: Enumerable<mobiliaStatus>
    not?: NestedEnummobiliaStatusWithAggregatesFilter | mobiliaStatus
    _count?: NestedIntFilter
    _min?: NestedEnummobiliaStatusFilter
    _max?: NestedEnummobiliaStatusFilter
  }

  export type ImovelRelationFilter = {
    is?: ImovelWhereInput
    isNot?: ImovelWhereInput
  }

  export type AddressImovelCountOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    addressDetail?: SortOrder
    imovelId?: SortOrder
  }

  export type AddressImovelAvgOrderByAggregateInput = {
    id?: SortOrder
    imovelId?: SortOrder
  }

  export type AddressImovelMaxOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    addressDetail?: SortOrder
    imovelId?: SortOrder
  }

  export type AddressImovelMinOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    addressDetail?: SortOrder
    imovelId?: SortOrder
  }

  export type AddressImovelSumOrderByAggregateInput = {
    id?: SortOrder
    imovelId?: SortOrder
  }

  export type PhotosImmobileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imovelId?: SortOrder
  }

  export type PhotosImmobileAvgOrderByAggregateInput = {
    id?: SortOrder
    imovelId?: SortOrder
  }

  export type PhotosImmobileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imovelId?: SortOrder
  }

  export type PhotosImmobileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imovelId?: SortOrder
  }

  export type PhotosImmobileSumOrderByAggregateInput = {
    id?: SortOrder
    imovelId?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type EnrollmentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutUserInput>, Enumerable<EnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutUserInput>
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutUserInput>, Enumerable<EnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutUserInput>
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type EnrollmentUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutUserInput>, Enumerable<EnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutUserInput>, Enumerable<EnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<UserCreateWithoutEnrollmentInput, UserUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentInput
    connect?: UserWhereUniqueInput
  }

  export type AddressCreateNestedManyWithoutEnrollmentInput = {
    create?: XOR<Enumerable<AddressCreateWithoutEnrollmentInput>, Enumerable<AddressUncheckedCreateWithoutEnrollmentInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutEnrollmentInput>
    createMany?: AddressCreateManyEnrollmentInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type AddressUncheckedCreateNestedManyWithoutEnrollmentInput = {
    create?: XOR<Enumerable<AddressCreateWithoutEnrollmentInput>, Enumerable<AddressUncheckedCreateWithoutEnrollmentInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutEnrollmentInput>
    createMany?: AddressCreateManyEnrollmentInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutEnrollmentInput = {
    create?: XOR<UserCreateWithoutEnrollmentInput, UserUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentInput
    upsert?: UserUpsertWithoutEnrollmentInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutEnrollmentInput, UserUncheckedUpdateWithoutEnrollmentInput>
  }

  export type AddressUpdateManyWithoutEnrollmentInput = {
    create?: XOR<Enumerable<AddressCreateWithoutEnrollmentInput>, Enumerable<AddressUncheckedCreateWithoutEnrollmentInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutEnrollmentInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutEnrollmentInput>
    createMany?: AddressCreateManyEnrollmentInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutEnrollmentInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutEnrollmentInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type AddressUncheckedUpdateManyWithoutEnrollmentInput = {
    create?: XOR<Enumerable<AddressCreateWithoutEnrollmentInput>, Enumerable<AddressUncheckedCreateWithoutEnrollmentInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutEnrollmentInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutEnrollmentInput>
    createMany?: AddressCreateManyEnrollmentInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutEnrollmentInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutEnrollmentInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type EnrollmentCreateNestedOneWithoutAddressInput = {
    create?: XOR<EnrollmentCreateWithoutAddressInput, EnrollmentUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutAddressInput
    connect?: EnrollmentWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnrollmentUpdateOneRequiredWithoutAddressInput = {
    create?: XOR<EnrollmentCreateWithoutAddressInput, EnrollmentUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutAddressInput
    upsert?: EnrollmentUpsertWithoutAddressInput
    connect?: EnrollmentWhereUniqueInput
    update?: XOR<EnrollmentUpdateWithoutAddressInput, EnrollmentUncheckedUpdateWithoutAddressInput>
  }

  export type AddressImovelCreateNestedManyWithoutImovelInput = {
    create?: XOR<Enumerable<AddressImovelCreateWithoutImovelInput>, Enumerable<AddressImovelUncheckedCreateWithoutImovelInput>>
    connectOrCreate?: Enumerable<AddressImovelCreateOrConnectWithoutImovelInput>
    createMany?: AddressImovelCreateManyImovelInputEnvelope
    connect?: Enumerable<AddressImovelWhereUniqueInput>
  }

  export type PhotosImmobileCreateNestedManyWithoutImovelInput = {
    create?: XOR<Enumerable<PhotosImmobileCreateWithoutImovelInput>, Enumerable<PhotosImmobileUncheckedCreateWithoutImovelInput>>
    connectOrCreate?: Enumerable<PhotosImmobileCreateOrConnectWithoutImovelInput>
    createMany?: PhotosImmobileCreateManyImovelInputEnvelope
    connect?: Enumerable<PhotosImmobileWhereUniqueInput>
  }

  export type AddressImovelUncheckedCreateNestedManyWithoutImovelInput = {
    create?: XOR<Enumerable<AddressImovelCreateWithoutImovelInput>, Enumerable<AddressImovelUncheckedCreateWithoutImovelInput>>
    connectOrCreate?: Enumerable<AddressImovelCreateOrConnectWithoutImovelInput>
    createMany?: AddressImovelCreateManyImovelInputEnvelope
    connect?: Enumerable<AddressImovelWhereUniqueInput>
  }

  export type PhotosImmobileUncheckedCreateNestedManyWithoutImovelInput = {
    create?: XOR<Enumerable<PhotosImmobileCreateWithoutImovelInput>, Enumerable<PhotosImmobileUncheckedCreateWithoutImovelInput>>
    connectOrCreate?: Enumerable<PhotosImmobileCreateOrConnectWithoutImovelInput>
    createMany?: PhotosImmobileCreateManyImovelInputEnvelope
    connect?: Enumerable<PhotosImmobileWhereUniqueInput>
  }

  export type AddressImovelUpdateManyWithoutImovelInput = {
    create?: XOR<Enumerable<AddressImovelCreateWithoutImovelInput>, Enumerable<AddressImovelUncheckedCreateWithoutImovelInput>>
    connectOrCreate?: Enumerable<AddressImovelCreateOrConnectWithoutImovelInput>
    upsert?: Enumerable<AddressImovelUpsertWithWhereUniqueWithoutImovelInput>
    createMany?: AddressImovelCreateManyImovelInputEnvelope
    set?: Enumerable<AddressImovelWhereUniqueInput>
    disconnect?: Enumerable<AddressImovelWhereUniqueInput>
    delete?: Enumerable<AddressImovelWhereUniqueInput>
    connect?: Enumerable<AddressImovelWhereUniqueInput>
    update?: Enumerable<AddressImovelUpdateWithWhereUniqueWithoutImovelInput>
    updateMany?: Enumerable<AddressImovelUpdateManyWithWhereWithoutImovelInput>
    deleteMany?: Enumerable<AddressImovelScalarWhereInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumamountStatusFieldUpdateOperationsInput = {
    set?: amountStatus
  }

  export type EnummobiliaStatusFieldUpdateOperationsInput = {
    set?: mobiliaStatus
  }

  export type PhotosImmobileUpdateManyWithoutImovelInput = {
    create?: XOR<Enumerable<PhotosImmobileCreateWithoutImovelInput>, Enumerable<PhotosImmobileUncheckedCreateWithoutImovelInput>>
    connectOrCreate?: Enumerable<PhotosImmobileCreateOrConnectWithoutImovelInput>
    upsert?: Enumerable<PhotosImmobileUpsertWithWhereUniqueWithoutImovelInput>
    createMany?: PhotosImmobileCreateManyImovelInputEnvelope
    set?: Enumerable<PhotosImmobileWhereUniqueInput>
    disconnect?: Enumerable<PhotosImmobileWhereUniqueInput>
    delete?: Enumerable<PhotosImmobileWhereUniqueInput>
    connect?: Enumerable<PhotosImmobileWhereUniqueInput>
    update?: Enumerable<PhotosImmobileUpdateWithWhereUniqueWithoutImovelInput>
    updateMany?: Enumerable<PhotosImmobileUpdateManyWithWhereWithoutImovelInput>
    deleteMany?: Enumerable<PhotosImmobileScalarWhereInput>
  }

  export type AddressImovelUncheckedUpdateManyWithoutImovelInput = {
    create?: XOR<Enumerable<AddressImovelCreateWithoutImovelInput>, Enumerable<AddressImovelUncheckedCreateWithoutImovelInput>>
    connectOrCreate?: Enumerable<AddressImovelCreateOrConnectWithoutImovelInput>
    upsert?: Enumerable<AddressImovelUpsertWithWhereUniqueWithoutImovelInput>
    createMany?: AddressImovelCreateManyImovelInputEnvelope
    set?: Enumerable<AddressImovelWhereUniqueInput>
    disconnect?: Enumerable<AddressImovelWhereUniqueInput>
    delete?: Enumerable<AddressImovelWhereUniqueInput>
    connect?: Enumerable<AddressImovelWhereUniqueInput>
    update?: Enumerable<AddressImovelUpdateWithWhereUniqueWithoutImovelInput>
    updateMany?: Enumerable<AddressImovelUpdateManyWithWhereWithoutImovelInput>
    deleteMany?: Enumerable<AddressImovelScalarWhereInput>
  }

  export type PhotosImmobileUncheckedUpdateManyWithoutImovelInput = {
    create?: XOR<Enumerable<PhotosImmobileCreateWithoutImovelInput>, Enumerable<PhotosImmobileUncheckedCreateWithoutImovelInput>>
    connectOrCreate?: Enumerable<PhotosImmobileCreateOrConnectWithoutImovelInput>
    upsert?: Enumerable<PhotosImmobileUpsertWithWhereUniqueWithoutImovelInput>
    createMany?: PhotosImmobileCreateManyImovelInputEnvelope
    set?: Enumerable<PhotosImmobileWhereUniqueInput>
    disconnect?: Enumerable<PhotosImmobileWhereUniqueInput>
    delete?: Enumerable<PhotosImmobileWhereUniqueInput>
    connect?: Enumerable<PhotosImmobileWhereUniqueInput>
    update?: Enumerable<PhotosImmobileUpdateWithWhereUniqueWithoutImovelInput>
    updateMany?: Enumerable<PhotosImmobileUpdateManyWithWhereWithoutImovelInput>
    deleteMany?: Enumerable<PhotosImmobileScalarWhereInput>
  }

  export type ImovelCreateNestedOneWithoutAddressImovelInput = {
    create?: XOR<ImovelCreateWithoutAddressImovelInput, ImovelUncheckedCreateWithoutAddressImovelInput>
    connectOrCreate?: ImovelCreateOrConnectWithoutAddressImovelInput
    connect?: ImovelWhereUniqueInput
  }

  export type ImovelUpdateOneRequiredWithoutAddressImovelInput = {
    create?: XOR<ImovelCreateWithoutAddressImovelInput, ImovelUncheckedCreateWithoutAddressImovelInput>
    connectOrCreate?: ImovelCreateOrConnectWithoutAddressImovelInput
    upsert?: ImovelUpsertWithoutAddressImovelInput
    connect?: ImovelWhereUniqueInput
    update?: XOR<ImovelUpdateWithoutAddressImovelInput, ImovelUncheckedUpdateWithoutAddressImovelInput>
  }

  export type ImovelCreateNestedOneWithoutPhotosImmobileInput = {
    create?: XOR<ImovelCreateWithoutPhotosImmobileInput, ImovelUncheckedCreateWithoutPhotosImmobileInput>
    connectOrCreate?: ImovelCreateOrConnectWithoutPhotosImmobileInput
    connect?: ImovelWhereUniqueInput
  }

  export type ImovelUpdateOneRequiredWithoutPhotosImmobileInput = {
    create?: XOR<ImovelCreateWithoutPhotosImmobileInput, ImovelUncheckedCreateWithoutPhotosImmobileInput>
    connectOrCreate?: ImovelCreateOrConnectWithoutPhotosImmobileInput
    upsert?: ImovelUpsertWithoutPhotosImmobileInput
    connect?: ImovelWhereUniqueInput
    update?: XOR<ImovelUpdateWithoutPhotosImmobileInput, ImovelUncheckedUpdateWithoutPhotosImmobileInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumamountStatusFilter = {
    equals?: amountStatus
    in?: Enumerable<amountStatus>
    notIn?: Enumerable<amountStatus>
    not?: NestedEnumamountStatusFilter | amountStatus
  }

  export type NestedEnummobiliaStatusFilter = {
    equals?: mobiliaStatus
    in?: Enumerable<mobiliaStatus>
    notIn?: Enumerable<mobiliaStatus>
    not?: NestedEnummobiliaStatusFilter | mobiliaStatus
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumamountStatusWithAggregatesFilter = {
    equals?: amountStatus
    in?: Enumerable<amountStatus>
    notIn?: Enumerable<amountStatus>
    not?: NestedEnumamountStatusWithAggregatesFilter | amountStatus
    _count?: NestedIntFilter
    _min?: NestedEnumamountStatusFilter
    _max?: NestedEnumamountStatusFilter
  }

  export type NestedEnummobiliaStatusWithAggregatesFilter = {
    equals?: mobiliaStatus
    in?: Enumerable<mobiliaStatus>
    notIn?: Enumerable<mobiliaStatus>
    not?: NestedEnummobiliaStatusWithAggregatesFilter | mobiliaStatus
    _count?: NestedIntFilter
    _min?: NestedEnummobiliaStatusFilter
    _max?: NestedEnummobiliaStatusFilter
  }

  export type SessionCreateWithoutUserInput = {
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutUserInput = {
    name: string
    cpf: string
    birthday: Date | string
    phone: string
    Address?: AddressCreateNestedManyWithoutEnrollmentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    cpf: string
    birthday: Date | string
    phone: string
    Address?: AddressUncheckedCreateNestedManyWithoutEnrollmentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateManyUserInputEnvelope = {
    data: Enumerable<EnrollmentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    token?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutEnrollmentInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: Enumerable<EnrollmentScalarWhereInput>
    OR?: Enumerable<EnrollmentScalarWhereInput>
    NOT?: Enumerable<EnrollmentScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    cpf?: StringFilter | string
    birthday?: DateTimeFilter | Date | string
    phone?: StringFilter | string
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutSessionInput = {
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Enrollment?: EnrollmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Enrollment?: EnrollmentUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateWithoutEnrollmentInput = {
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Session?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnrollmentInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnrollmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentInput, UserUncheckedCreateWithoutEnrollmentInput>
  }

  export type AddressCreateWithoutEnrollmentInput = {
    cep: string
    street: string
    city: string
    state: string
    number: string
    neighborhood: string
    addressDetail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUncheckedCreateWithoutEnrollmentInput = {
    id?: number
    cep: string
    street: string
    city: string
    state: string
    number: string
    neighborhood: string
    addressDetail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutEnrollmentInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutEnrollmentInput, AddressUncheckedCreateWithoutEnrollmentInput>
  }

  export type AddressCreateManyEnrollmentInputEnvelope = {
    data: Enumerable<AddressCreateManyEnrollmentInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEnrollmentInput = {
    update: XOR<UserUpdateWithoutEnrollmentInput, UserUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<UserCreateWithoutEnrollmentInput, UserUncheckedCreateWithoutEnrollmentInput>
  }

  export type UserUpdateWithoutEnrollmentInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Session?: SessionUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Session?: SessionUncheckedUpdateManyWithoutUserInput
  }

  export type AddressUpsertWithWhereUniqueWithoutEnrollmentInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutEnrollmentInput, AddressUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<AddressCreateWithoutEnrollmentInput, AddressUncheckedCreateWithoutEnrollmentInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutEnrollmentInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutEnrollmentInput, AddressUncheckedUpdateWithoutEnrollmentInput>
  }

  export type AddressUpdateManyWithWhereWithoutEnrollmentInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutAddressInput>
  }

  export type AddressScalarWhereInput = {
    AND?: Enumerable<AddressScalarWhereInput>
    OR?: Enumerable<AddressScalarWhereInput>
    NOT?: Enumerable<AddressScalarWhereInput>
    id?: IntFilter | number
    cep?: StringFilter | string
    street?: StringFilter | string
    city?: StringFilter | string
    state?: StringFilter | string
    number?: StringFilter | string
    neighborhood?: StringFilter | string
    addressDetail?: StringNullableFilter | string | null
    enrollmentId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type EnrollmentCreateWithoutAddressInput = {
    name: string
    cpf: string
    birthday: Date | string
    phone: string
    User: UserCreateNestedOneWithoutEnrollmentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUncheckedCreateWithoutAddressInput = {
    id?: number
    name: string
    cpf: string
    birthday: Date | string
    phone: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutAddressInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutAddressInput, EnrollmentUncheckedCreateWithoutAddressInput>
  }

  export type EnrollmentUpsertWithoutAddressInput = {
    update: XOR<EnrollmentUpdateWithoutAddressInput, EnrollmentUncheckedUpdateWithoutAddressInput>
    create: XOR<EnrollmentCreateWithoutAddressInput, EnrollmentUncheckedCreateWithoutAddressInput>
  }

  export type EnrollmentUpdateWithoutAddressInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutEnrollmentInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressImovelCreateWithoutImovelInput = {
    cep: string
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
    addressDetail?: string | null
  }

  export type AddressImovelUncheckedCreateWithoutImovelInput = {
    id?: number
    cep: string
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
    addressDetail?: string | null
  }

  export type AddressImovelCreateOrConnectWithoutImovelInput = {
    where: AddressImovelWhereUniqueInput
    create: XOR<AddressImovelCreateWithoutImovelInput, AddressImovelUncheckedCreateWithoutImovelInput>
  }

  export type AddressImovelCreateManyImovelInputEnvelope = {
    data: Enumerable<AddressImovelCreateManyImovelInput>
    skipDuplicates?: boolean
  }

  export type PhotosImmobileCreateWithoutImovelInput = {
    name: string
  }

  export type PhotosImmobileUncheckedCreateWithoutImovelInput = {
    id?: number
    name: string
  }

  export type PhotosImmobileCreateOrConnectWithoutImovelInput = {
    where: PhotosImmobileWhereUniqueInput
    create: XOR<PhotosImmobileCreateWithoutImovelInput, PhotosImmobileUncheckedCreateWithoutImovelInput>
  }

  export type PhotosImmobileCreateManyImovelInputEnvelope = {
    data: Enumerable<PhotosImmobileCreateManyImovelInput>
    skipDuplicates?: boolean
  }

  export type AddressImovelUpsertWithWhereUniqueWithoutImovelInput = {
    where: AddressImovelWhereUniqueInput
    update: XOR<AddressImovelUpdateWithoutImovelInput, AddressImovelUncheckedUpdateWithoutImovelInput>
    create: XOR<AddressImovelCreateWithoutImovelInput, AddressImovelUncheckedCreateWithoutImovelInput>
  }

  export type AddressImovelUpdateWithWhereUniqueWithoutImovelInput = {
    where: AddressImovelWhereUniqueInput
    data: XOR<AddressImovelUpdateWithoutImovelInput, AddressImovelUncheckedUpdateWithoutImovelInput>
  }

  export type AddressImovelUpdateManyWithWhereWithoutImovelInput = {
    where: AddressImovelScalarWhereInput
    data: XOR<AddressImovelUpdateManyMutationInput, AddressImovelUncheckedUpdateManyWithoutAddressImovelInput>
  }

  export type AddressImovelScalarWhereInput = {
    AND?: Enumerable<AddressImovelScalarWhereInput>
    OR?: Enumerable<AddressImovelScalarWhereInput>
    NOT?: Enumerable<AddressImovelScalarWhereInput>
    id?: IntFilter | number
    cep?: StringFilter | string
    street?: StringFilter | string
    number?: StringFilter | string
    neighborhood?: StringFilter | string
    city?: StringFilter | string
    state?: StringFilter | string
    addressDetail?: StringNullableFilter | string | null
    imovelId?: IntFilter | number
  }

  export type PhotosImmobileUpsertWithWhereUniqueWithoutImovelInput = {
    where: PhotosImmobileWhereUniqueInput
    update: XOR<PhotosImmobileUpdateWithoutImovelInput, PhotosImmobileUncheckedUpdateWithoutImovelInput>
    create: XOR<PhotosImmobileCreateWithoutImovelInput, PhotosImmobileUncheckedCreateWithoutImovelInput>
  }

  export type PhotosImmobileUpdateWithWhereUniqueWithoutImovelInput = {
    where: PhotosImmobileWhereUniqueInput
    data: XOR<PhotosImmobileUpdateWithoutImovelInput, PhotosImmobileUncheckedUpdateWithoutImovelInput>
  }

  export type PhotosImmobileUpdateManyWithWhereWithoutImovelInput = {
    where: PhotosImmobileScalarWhereInput
    data: XOR<PhotosImmobileUpdateManyMutationInput, PhotosImmobileUncheckedUpdateManyWithoutPhotosImmobileInput>
  }

  export type PhotosImmobileScalarWhereInput = {
    AND?: Enumerable<PhotosImmobileScalarWhereInput>
    OR?: Enumerable<PhotosImmobileScalarWhereInput>
    NOT?: Enumerable<PhotosImmobileScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    imovelId?: IntFilter | number
  }

  export type ImovelCreateWithoutAddressImovelInput = {
    area: number
    rooms: number
    bathroom: number
    garage: number
    yard: boolean
    ilumination: amountStatus
    water: amountStatus
    pipedGas: boolean
    furniture: mobiliaStatus
    pet: boolean
    condominium: number
    rent: number
    iptu: number
    availability: boolean
    photosImmobile?: PhotosImmobileCreateNestedManyWithoutImovelInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImovelUncheckedCreateWithoutAddressImovelInput = {
    id?: number
    area: number
    rooms: number
    bathroom: number
    garage: number
    yard: boolean
    ilumination: amountStatus
    water: amountStatus
    pipedGas: boolean
    furniture: mobiliaStatus
    pet: boolean
    condominium: number
    rent: number
    iptu: number
    availability: boolean
    photosImmobile?: PhotosImmobileUncheckedCreateNestedManyWithoutImovelInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImovelCreateOrConnectWithoutAddressImovelInput = {
    where: ImovelWhereUniqueInput
    create: XOR<ImovelCreateWithoutAddressImovelInput, ImovelUncheckedCreateWithoutAddressImovelInput>
  }

  export type ImovelUpsertWithoutAddressImovelInput = {
    update: XOR<ImovelUpdateWithoutAddressImovelInput, ImovelUncheckedUpdateWithoutAddressImovelInput>
    create: XOR<ImovelCreateWithoutAddressImovelInput, ImovelUncheckedCreateWithoutAddressImovelInput>
  }

  export type ImovelUpdateWithoutAddressImovelInput = {
    area?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    bathroom?: IntFieldUpdateOperationsInput | number
    garage?: IntFieldUpdateOperationsInput | number
    yard?: BoolFieldUpdateOperationsInput | boolean
    ilumination?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    water?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    pipedGas?: BoolFieldUpdateOperationsInput | boolean
    furniture?: EnummobiliaStatusFieldUpdateOperationsInput | mobiliaStatus
    pet?: BoolFieldUpdateOperationsInput | boolean
    condominium?: IntFieldUpdateOperationsInput | number
    rent?: IntFieldUpdateOperationsInput | number
    iptu?: IntFieldUpdateOperationsInput | number
    availability?: BoolFieldUpdateOperationsInput | boolean
    photosImmobile?: PhotosImmobileUpdateManyWithoutImovelInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImovelUncheckedUpdateWithoutAddressImovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    bathroom?: IntFieldUpdateOperationsInput | number
    garage?: IntFieldUpdateOperationsInput | number
    yard?: BoolFieldUpdateOperationsInput | boolean
    ilumination?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    water?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    pipedGas?: BoolFieldUpdateOperationsInput | boolean
    furniture?: EnummobiliaStatusFieldUpdateOperationsInput | mobiliaStatus
    pet?: BoolFieldUpdateOperationsInput | boolean
    condominium?: IntFieldUpdateOperationsInput | number
    rent?: IntFieldUpdateOperationsInput | number
    iptu?: IntFieldUpdateOperationsInput | number
    availability?: BoolFieldUpdateOperationsInput | boolean
    photosImmobile?: PhotosImmobileUncheckedUpdateManyWithoutImovelInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImovelCreateWithoutPhotosImmobileInput = {
    addressImovel?: AddressImovelCreateNestedManyWithoutImovelInput
    area: number
    rooms: number
    bathroom: number
    garage: number
    yard: boolean
    ilumination: amountStatus
    water: amountStatus
    pipedGas: boolean
    furniture: mobiliaStatus
    pet: boolean
    condominium: number
    rent: number
    iptu: number
    availability: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImovelUncheckedCreateWithoutPhotosImmobileInput = {
    id?: number
    addressImovel?: AddressImovelUncheckedCreateNestedManyWithoutImovelInput
    area: number
    rooms: number
    bathroom: number
    garage: number
    yard: boolean
    ilumination: amountStatus
    water: amountStatus
    pipedGas: boolean
    furniture: mobiliaStatus
    pet: boolean
    condominium: number
    rent: number
    iptu: number
    availability: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImovelCreateOrConnectWithoutPhotosImmobileInput = {
    where: ImovelWhereUniqueInput
    create: XOR<ImovelCreateWithoutPhotosImmobileInput, ImovelUncheckedCreateWithoutPhotosImmobileInput>
  }

  export type ImovelUpsertWithoutPhotosImmobileInput = {
    update: XOR<ImovelUpdateWithoutPhotosImmobileInput, ImovelUncheckedUpdateWithoutPhotosImmobileInput>
    create: XOR<ImovelCreateWithoutPhotosImmobileInput, ImovelUncheckedCreateWithoutPhotosImmobileInput>
  }

  export type ImovelUpdateWithoutPhotosImmobileInput = {
    addressImovel?: AddressImovelUpdateManyWithoutImovelInput
    area?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    bathroom?: IntFieldUpdateOperationsInput | number
    garage?: IntFieldUpdateOperationsInput | number
    yard?: BoolFieldUpdateOperationsInput | boolean
    ilumination?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    water?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    pipedGas?: BoolFieldUpdateOperationsInput | boolean
    furniture?: EnummobiliaStatusFieldUpdateOperationsInput | mobiliaStatus
    pet?: BoolFieldUpdateOperationsInput | boolean
    condominium?: IntFieldUpdateOperationsInput | number
    rent?: IntFieldUpdateOperationsInput | number
    iptu?: IntFieldUpdateOperationsInput | number
    availability?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImovelUncheckedUpdateWithoutPhotosImmobileInput = {
    id?: IntFieldUpdateOperationsInput | number
    addressImovel?: AddressImovelUncheckedUpdateManyWithoutImovelInput
    area?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    bathroom?: IntFieldUpdateOperationsInput | number
    garage?: IntFieldUpdateOperationsInput | number
    yard?: BoolFieldUpdateOperationsInput | boolean
    ilumination?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    water?: EnumamountStatusFieldUpdateOperationsInput | amountStatus
    pipedGas?: BoolFieldUpdateOperationsInput | boolean
    furniture?: EnummobiliaStatusFieldUpdateOperationsInput | mobiliaStatus
    pet?: BoolFieldUpdateOperationsInput | boolean
    condominium?: IntFieldUpdateOperationsInput | number
    rent?: IntFieldUpdateOperationsInput | number
    iptu?: IntFieldUpdateOperationsInput | number
    availability?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: number
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateManyUserInput = {
    id?: number
    name: string
    cpf: string
    birthday: Date | string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    Address?: AddressUpdateManyWithoutEnrollmentInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    Address?: AddressUncheckedUpdateManyWithoutEnrollmentInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateManyEnrollmentInput = {
    id?: number
    cep: string
    street: string
    city: string
    state: string
    number: string
    neighborhood: string
    addressDetail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateWithoutEnrollmentInput = {
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressImovelCreateManyImovelInput = {
    id?: number
    cep: string
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
    addressDetail?: string | null
  }

  export type PhotosImmobileCreateManyImovelInput = {
    id?: number
    name: string
  }

  export type AddressImovelUpdateWithoutImovelInput = {
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressImovelUncheckedUpdateWithoutImovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressImovelUncheckedUpdateManyWithoutAddressImovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhotosImmobileUpdateWithoutImovelInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PhotosImmobileUncheckedUpdateWithoutImovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PhotosImmobileUncheckedUpdateManyWithoutPhotosImmobileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}