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
  </ul>
<label id="theme-toggle-button">
  <input type="checkbox" id="toggle" onchange="setTheme(this.checked)"/>
  <svg viewBox="0 0 69.667 44" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(3.5 3.5)" data-name="Component 15 – 1" id="Component_15_1">
      <g filter="url(#container)" transform="matrix(1, 0, 0, 1, -3.5, -3.5)">
        <rect fill="#83cbd8" transform="translate(3.5 3.5)" rx="17.5" height="35" width="60.667" data-name="container" id="container"></rect>
      </g>
      
      <g transform="translate(2.333 2.333)" id="button">
        
        <g data-name="sun" id="sun">
          <g filter="url(#sun-outer)" transform="matrix(1, 0, 0, 1, -5.83, -5.83)">
            <circle fill="#f8e664" transform="translate(5.83 5.83)" r="15.167" cy="15.167" cx="15.167" data-name="sun-outer" id="sun-outer-2"></circle>
          </g>
          <g filter="url(#sun)" transform="matrix(1, 0, 0, 1, -5.83, -5.83)">
            <path fill="rgba(246,254,247,0.29)" transform="translate(9.33 9.33)" d="M11.667,0A11.667,11.667,0,1,1,0,11.667,11.667,11.667,0,0,1,11.667,0Z" data-name="sun" id="sun-3"></path>
          </g>
          <circle fill="#fcf4b9" transform="translate(8.167 8.167)" r="7" cy="7" cx="7" id="sun-inner"></circle>
        </g>
        
          
        <g data-name="moon" id="moon">
          <g filter="url(#moon)" transform="matrix(1, 0, 0, 1, -31.5, -5.83)">
            <circle fill="#cce6ee" transform="translate(31.5 5.83)" r="15.167" cy="15.167" cx="15.167" data-name="moon" id="moon-3"></circle>
          </g>
          <g fill="#a6cad0" transform="translate(-24.415 -1.009)" id="patches">
            <circle transform="translate(43.009 4.496)" r="2" cy="2" cx="2"></circle>
            <circle transform="translate(39.366 17.952)" r="2" cy="2" cx="2" data-name="patch"></circle>
            <circle transform="translate(33.016 8.044)" r="1" cy="1" cx="1" data-name="patch"></circle>
            <circle transform="translate(51.081 18.888)" r="1" cy="1" cx="1" data-name="patch"></circle>
            <circle transform="translate(33.016 22.503)" r="1" cy="1" cx="1" data-name="patch"></circle>
            <circle transform="translate(50.081 10.53)" r="1.5" cy="1.5" cx="1.5" data-name="patch"></circle>
          </g>
        </g>
      </g>
      
      
      <g filter="url(#cloud)" transform="matrix(1, 0, 0, 1, -3.5, -3.5)">
        <path fill="#fff" transform="translate(-3466.47 -160.94)" d="M3512.81,173.815a4.463,4.463,0,0,1,2.243.62.95.95,0,0,1,.72-1.281,4.852,4.852,0,0,1,2.623.519c.034.02-.5-1.968.281-2.716a2.117,2.117,0,0,1,2.829-.274,1.821,1.821,0,0,1,.854,1.858c.063.037,2.594-.049,3.285,1.273s-.865,2.544-.807,2.626a12.192,12.192,0,0,1,2.278.892c.553.448,1.106,1.992-1.62,2.927a7.742,7.742,0,0,1-3.762-.3c-1.28-.49-1.181-2.65-1.137-2.624s-1.417,2.2-2.623,2.2a4.172,4.172,0,0,1-2.394-1.206,3.825,3.825,0,0,1-2.771.774c-3.429-.46-2.333-3.267-2.2-3.55A3.721,3.721,0,0,1,3512.81,173.815Z" data-name="cloud" id="cloud"></path>
      </g>

      
      <g fill="#def8ff" transform="translate(3.585 1.325)" id="stars">
        <path transform="matrix(-1, 0.017, -0.017, -1, 24.231, 3.055)" d="M.774,0,.566.559,0,.539.458.933.25,1.492l.485-.361.458.394L1.024.953,1.509.592.943.572Z"></path>
        <path transform="matrix(-0.777, 0.629, -0.629, -0.777, 23.185, 12.358)" d="M1.341.529.836.472.736,0,.505.46,0,.4.4.729l-.231.46L.605.932l.4.326L.9.786Z" data-name="star"></path>
        <path transform="matrix(0.438, 0.899, -0.899, 0.438, 23.177, 29.735)" d="M.015,1.065.475.9l.285.365L.766.772l.46-.164L.745.494.751,0,.481.407,0,.293.285.658Z" data-name="star"></path>
        <path transform="translate(12.677 0.388) rotate(104)" d="M1.161,1.6,1.059,1,1.574.722.962.607.86,0,.613.572,0,.457.446.881.2,1.454l.516-.274Z" data-name="star"></path>
        <path transform="matrix(-0.07, 0.998, -0.998, -0.07, 11.066, 15.457)" d="M.873,1.648l.114-.62L1.579.945,1.03.62,1.144,0,.706.464.157.139.438.7,0,1.167l.592-.083Z" data-name="star"></path>
        <path transform="translate(8.326 28.061) rotate(11)" d="M.593,0,.638.724,0,.982l.7.211.045.724.36-.64.7.211L1.342.935,1.7.294,1.063.552Z" data-name="star"></path>
        <path transform="translate(5.012 5.962) rotate(172)" d="M.816,0,.5.455,0,.311.323.767l-.312.455.516-.215.323.456L.827.911,1.343.7.839.552Z" data-name="star"></path>
        <path transform="translate(2.218 14.616) rotate(169)" d="M1.261,0,.774.571.114.3.487.967,0,1.538.728,1.32l.372.662.047-.749.728-.218L1.215.749Z" data-name="star"></path>
      </g>
    </g>
  </svg>
</label>
</nav>`;
  }
}

customElements.define("side-bar", SideBar);
