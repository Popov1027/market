import http from '../http';

export const searchUsers = (query: string) => {
    return http
        .get(`users/search?q=${query}`)
        .then((response) => {
            const users = response.data.users;

            const filteredUsers = users.filter((user: any) =>
                user.firstName.toLowerCase().includes(query.toLowerCase())
            );

            return filteredUsers;
        })
        .catch((error) => {
            throw error;
        });
};
