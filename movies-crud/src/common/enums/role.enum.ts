/** 
    * Se usará en el módulo de Users y también en autenticación/guards
    * para diferenciar permisos entre administradores y clientes.
    * 
    * - - - 
    * 
    * 
*/
export enum UserRole {
    ADMIN = 'admin',
    CLIENT = 'client',
}

/** Exportamos los valores en un array para validaciones dinamicas y seeds */
export const USER_ROLE_VALUES = Object.values(UserRole);