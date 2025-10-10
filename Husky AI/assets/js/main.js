

  /* ============================= ANURAG: AUTHENTICATION UI RENDER ============================= */


  const renderAuthUI = () => {
    const user = getUser();
    if (!user) return;

    $$('a[href="login.html"]').forEach(a => {
      const li = a.closest("li");
      if (li && li.classList.contains("nav-item")) {
        const wrapper = document.createElement("li");
        wrapper.className = "nav-item dropdown";
        const name = user.displayName || displayFromEmail(user.email);
        wrapper.innerHTML = `
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-person-circle me-1"></i><span class="account-name">${name}</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><span class="dropdown-item-text small text-secondary">${user.email}</span></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" id="logoutLink"><i class="bi bi-box-arrow-right me-2"></i>Logout</a></li>
          </ul>`;
        li.parentElement.replaceChild(wrapper, li);

        new bootstrap.Dropdown(wrapper.querySelector('[data-bs-toggle="dropdown"]'));
        wrapper.querySelector("#logoutLink")?.addEventListener("click", (e) => {
          e.preventDefault();
          logout("login.html");
        });
      } else {
        a.textContent = (user.displayName || displayFromEmail(user.email));
        a.href = "#";
        a.classList.add("disabled");
        const body = a.closest(".offcanvas-body");
        if (body && !body.querySelector("#logoutLinkOffcanvas")) {
          const btn = document.createElement("button");
          btn.id = "logoutLinkOffcanvas";
          btn.type = "button";
          btn.className = "btn btn-outline-secondary w-100 mt-3";
          btn.innerHTML = '<i class="bi bi-box-arrow-right me-2"></i>Logout';
          btn.addEventListener("click", () => logout("login.html"));
          body.appendChild(btn);
        }
      }
    });
  };