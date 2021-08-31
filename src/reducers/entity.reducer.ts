import { Entity } from "../modals/Entity";

export interface EntityState<T extends Entity = Entity> {
  byId: {
    [id: number]: T;
  };
  selectedId?: number;
  loadingOne: boolean;
  loadingList: boolean;
  errorOne?: string;
}

export const initialEntityState = {
  byId: {},
  loadingOne: false,
  loadingList: false,
};

export const getIds = (entities: Entity[]) => {
  return entities.map((e) => e.id);
};

export const select = (state: EntityState, id: number) => ({
  ...state,
  selectedId: id,
  loadingOne: true,
  errorOne: undefined,
});

export const setErrorForOne = (state: EntityState, id: number, msg: string) => {
  if (state.selectedId !== id) {
    return state;
  }

  return { ...state, errorOne: msg, loadingOne: false };
};

export const addOne = <T extends EntityState = EntityState>(
  state: EntityState,
  entity: Entity,
  loading?: boolean
) => {
  const newLoading = loading === undefined ? state.loadingOne : loading;
  return {
    ...state,
    byId: { ...state.byId, [entity.id]: entity },
    loadingOne: newLoading,
  } as T;
};

export const addMany = <T extends EntityState = EntityState>(
  state: EntityState,
  entities: Entity[]
) => {
  if (entities.length === 0) {
    return state as T;
  }
  const allEntities = entities.reduce((prev, entity) => {
    return { ...prev, [entity.id]: entity };
  }, {});

  return {
    ...state,
    byId: { ...state.byId, ...allEntities },
  } as T;
};
