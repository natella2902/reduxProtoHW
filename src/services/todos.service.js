import httpService from "./http.service";
const todosEndpoint = "todos/";
const todosService = {
    fetch: async () => {
        const { data } = await httpService.get(todosEndpoint, {
            params: {
                _page: 1,
                _limit: 10,
            },
        });
        return data;
    },
    createTodo: async () => {
        const payload = {
            title: 'foo',
            completed: 'false',
            userId: 1
        };
        const { data } = await httpService.post(todosEndpoint, payload)
        return data
    }
};
export default todosService;
