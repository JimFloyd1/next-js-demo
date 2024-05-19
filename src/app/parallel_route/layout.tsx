export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login
}:{
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
}) {
    const isLoggedIn = true
    // This is where you use a function like getUser or useAuth to determine the users authentication state
    return isLoggedIn ? (
    <div>
    <div>{children}</div>
    <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{users}</div>
        <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
    </div>
    </div>
    ) : (
    login
    );
}
