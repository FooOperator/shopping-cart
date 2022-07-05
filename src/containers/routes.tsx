import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Shop } from "./Shop";
import { Layout } from "../components/Layout";
import ProtectedRoute from "../auth/ProtectedRoute";
import NotFound from "../components/NotFound/NotFound";

export const routes: { [key: string]: [React.FC, boolean] } = {
    '': [Home, false],
    'me': [Profile, true],
    'shop': [Shop, false],
    '*': [NotFound, false],
}

export const AppRoutes = () => (
    <Routes >
        <Route path='/' element={<Layout />} >
            {Object.keys(routes).map((key, index) => {
                const [Component, isProtected] = routes[key];
                return (
                    <Route
                        key={index}
                        path={key}
                        element={
                            isProtected ?
                                <ProtectedRoute component={Component} />
                                :
                                <Component />
                        } />
                );
            })}
        </Route>
    </Routes>
);