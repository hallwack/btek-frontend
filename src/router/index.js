export const routeConfig = [
  {
    path: "/",
    element: <RequireAuth><App /></RequireAuth>
  },
  {
    path: "/characters",
    element: <CharacterList />,
  },
  {
    path: "/characters/:id",
    element: <CharacterDetail />
  },
  {
    path: "/login",
    element: <Login />
  }
]
