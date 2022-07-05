import { withAuthenticationRequired } from "@auth0/auth0-react";

interface ProtectedRouteProps {
    component: React.ComponentType<object>;
}

const ProtectedRoute = (_props: ProtectedRouteProps) => {
    const { component, ...args } = _props;
    const Component = withAuthenticationRequired(component, args);
    return <Component />;
};

export default ProtectedRoute;