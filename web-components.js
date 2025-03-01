class SideBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<nav class="sidebar" id="sideBar">
  <div class="profile">
    <svg
      fill="currentColor"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM3,22V18a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5v4a1,1,0,0,1-2,0V18a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v4a1,1,0,0,1-2,0Z"
      />
    </svg>
    <h2 class="title">Administrador</h2>
  </div>
  <ul>
    <a href="index.html" id="/">
    <li>
      <svg
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 915 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_2)">
          <path
            d="M172.907 118.556H765L684.444 400.5H216.284M724.722 561.611H241.389L160.833 38H40M281.667 722.722C281.667 744.968 263.634 763 241.389 763C219.144 763 201.111 744.968 201.111 722.722C201.111 700.477 219.144 682.444 241.389 682.444C263.634 682.444 281.667 700.477 281.667 722.722ZM724.722 722.722C724.722 744.968 706.69 763 684.444 763C662.199 763 644.167 744.968 644.167 722.722C644.167 700.477 662.199 682.444 684.444 682.444C706.69 682.444 724.722 700.477 724.722 722.722Z"
            stroke="white"
            stroke-width="75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2">
            <rect width="915" height="800" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <h1 class="title">Caja</h1>
    </li>
    </a>
    <a href="inventory.html" id="inventory">
      <li>
        <svg
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M237.778 161.257L765 161.284M237.778 392.027L765 392.058M237.778 622.796L765 622.827M55.2778 161.231H55.6833M55.2778 392H55.6833M55.2778 622.769H55.6833M75.5556 161.231C75.5556 171.852 66.4768 180.462 55.2778 180.462C44.0788 180.462 35 171.852 35 161.231C35 150.61 44.0788 142 55.2778 142C66.4768 142 75.5556 150.61 75.5556 161.231ZM75.5556 392C75.5556 402.619 66.4768 411.231 55.2778 411.231C44.0788 411.231 35 402.619 35 392C35 381.381 44.0788 372.769 55.2778 372.769C66.4768 372.769 75.5556 381.381 75.5556 392ZM75.5556 622.769C75.5556 633.388 66.4768 642 55.2778 642C44.0788 642 35 633.388 35 622.769C35 612.15 44.0788 603.538 55.2778 603.538C66.4768 603.538 75.5556 612.15 75.5556 622.769Z"
            stroke="white"
            stroke-width="75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h1 class="title">Gestión de inventario</h1>
      </li>
    </a>
        <a href="supplier.html" id="supplier">
    <li>
      <svg
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
      >
        <path
          d="M21.74,1C21.54,0.5 21.04,0 20.5,0H3.5C2.96,0 2.46,0.5 2.26,1L0,6V21C0,21.55 0.45,22 1,22H23C23.55,22 24,21.55 24,21V6L21.74,1ZM4,2H20L21.5,6H2.5L4,2ZM22,20H2V8H22V20ZM11,16H9V14H11V12H13V14H15V16H13V18H11V16Z"
        />
      </svg>

      <h1 class="title">Proveedores</h1>
    </li>
        </a>
   <a href="clients.html" id="clients">
    <li>
      <svg
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_4_2)">
          <path
            d="M400 400C510.5 400 600 310.5 600 200C600 89.5 510.5 0 400 0C289.5 0 200 89.5 200 200C200 310.5 289.5 400 400 400ZM400 500C266.5 500 0 567 0 700V800H800V700C800 567 533.5 500 400 500Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_2">
            <rect width="800" height="800" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <h1 class="title">Clientes</h1>
    </li>
       </a>
<a href="history.html" id="history">
    <li>
      <svg
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_4_4)">
          <path
            d="M400 236V400.308L503 503"
            stroke="white"
            stroke-width="50"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M85.6554 189.564L54.8866 189.718C54.9711 206.59 68.6281 220.247 85.5007 220.332L85.6554 189.564ZM189.934 220.857C206.927 220.942 220.772 207.236 220.857 190.243C220.942 173.25 207.236 159.405 190.243 159.319L189.934 220.857ZM115.899 84.976C115.814 67.9828 101.969 54.2761 84.976 54.3614C67.9828 54.4472 54.2761 68.2921 54.3618 85.2849L115.899 84.976ZM61.5385 400C61.5385 383.007 47.7625 369.231 30.7692 369.231C13.776 369.231 0 383.007 0 400H61.5385ZM600.021 746.47C614.732 737.961 619.758 719.139 611.249 704.427C602.741 689.719 583.918 684.689 569.21 693.202L600.021 746.47ZM693.202 569.21C684.689 583.918 689.719 602.741 704.427 611.249C719.139 619.758 737.961 614.732 746.47 600.021L693.202 569.21ZM118.578 115.744C106.502 127.7 106.405 147.182 118.361 159.258C130.317 171.334 149.799 171.431 161.874 159.474L118.578 115.744ZM681.53 118.476C524.804 -38.2499 271.541 -39.8367 115.852 115.852L159.367 159.367C290.612 28.121 504.911 28.8837 638.019 161.991L681.53 118.476ZM115.852 115.852L63.8983 167.806L107.413 211.321L159.367 159.367L115.852 115.852ZM85.5007 220.332L189.934 220.857L190.243 159.319L85.8101 158.795L85.5007 220.332ZM116.424 189.409L115.899 84.976L54.3618 85.2849L54.8866 189.718L116.424 189.409ZM400 61.5385C586.925 61.5385 738.462 213.073 738.462 400H800C800 179.086 620.915 0 400 0V61.5385ZM400 738.462C213.073 738.462 61.5385 586.925 61.5385 400H0C0 620.915 179.086 800 400 800V738.462ZM569.21 693.202C519.458 721.982 461.698 738.462 400 738.462V800C472.808 800 541.157 780.521 600.021 746.47L569.21 693.202ZM738.462 400C738.462 461.698 721.982 519.458 693.202 569.21L746.47 600.021C780.521 541.157 800 472.808 800 400H738.462ZM161.874 159.474C223.059 98.896 307.137 61.5385 400 61.5385V0C290.274 0 190.816 44.2219 118.578 115.744L161.874 159.474Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_4">
            <rect width="800" height="800" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <h1 class="title">Historial de cambios</h1>
    </li>
        </a>
  </ul>
</nav>`;
  }
}

customElements.define("side-bar", SideBar);
