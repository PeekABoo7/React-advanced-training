import projectApi from '../services/projectApi';
export const addNew = async (projectName) => {
    const action = {
        type: "PROJECT_ADD_NEW",
        payload: {
        id: 0,
        name: projectName,
        createdAt: new Date()
        }
    };
    await projectApi.save(action.payload);
    return action;
}

export { load } from './load';

