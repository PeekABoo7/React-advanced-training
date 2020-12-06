import projectApi from '../services/projectApi';
export async function load(){
    const bugs = await projectApi.getAll();
    const action = { type : 'PROJECT_INIT', payload : bugs } ;
    return action;
} 