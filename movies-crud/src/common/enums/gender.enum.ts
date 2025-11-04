/**
    * ENUM que se usará en el módulo de Movies para definir el tipo de género
    * en las entidades y validar valores en los DTOs.
    * 
    * - - - 
    * 
    * 
*/
export enum Gender {
    ACTION = 'action',
    ROMANCE = 'romance',
    HORROR = 'horror',
}

/** Exportamos los valores en un array para validaciones dinamicas y seeds */
export const GENDER_VALUES = Object.values(Gender);