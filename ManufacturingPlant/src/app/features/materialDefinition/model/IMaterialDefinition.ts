
export interface IMaterialDefinition{
    id : string,
    name: string,
    description?: string
}

export interface IMaterialDefinitionState{
    success: boolean,
    error : string,
    material : IMaterialDefinition[]
}