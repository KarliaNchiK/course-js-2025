const API_BASE = "/api";

export async function signup(user) {
    const res = await fetch(`${API_BASE}/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
        credentials: 'include'
    });
    let success = false;
    if(res.ok){
        success = true;
    }
    return success;
}

export async function login(user) {
    const res = await fetch(`${API_BASE}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
        credentials: 'include'
    });
    let isAuthenticated = false;
    if (res.ok) {
        isAuthenticated = true;
        localStorage.setItem("userLogin", user.login);
    }
    return isAuthenticated;
}

export async function logout(user) {
    const res = await fetch(`${API_BASE}/user/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
        credentials: 'include'
    });
    return res.json();
}

export async function searchProductsByName(productName) {
    const res = await fetch(`${API_BASE}/products/name/${encodeURIComponent(productName)}`, {},
    {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        }
    }
);
    return res;
}

export async function searchProductsByCategory(categoryName) {
    const res = await fetch(`${API_BASE}/products/category/${encodeURIComponent(categoryName)}`, {},
        {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
    return res;
}

export async function getUnavailableSlots(productId) {
    try {
        const res = await fetch(`${API_BASE}/slots/${productId}`, {}, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log(res);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.error('Error fetching unavailable slots:', error);
        // TODO: Сделать попап с ошибкой
        throw error; // или return null / пустой массив в зависимости от логики
    }
}

export async function postSlots(slotsInfo) {
    const res = await fetch(`${API_BASE}/book`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(slotsInfo)
    });

    return res;
}

export async function sendInvitation(invitationModel) {
    try {
        console.log("INVITATION:", JSON.stringify(invitationModel, null, 2));
        const res = await fetch(`${API_BASE}/calendar/send/invitation`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(invitationModel),
            credentials: 'include'
        });

        return res.ok;

    } catch (error) {
        console.error('Failed to send invitation:', error);
        return false;
    }
}
