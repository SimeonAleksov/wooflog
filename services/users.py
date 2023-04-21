from domains.users import repositories as user_repositories


class UserService:
    def create_user(data):
        return user_repositories.create_user(data)
