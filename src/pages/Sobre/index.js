import React from 'react';
import './style.css';
import './script.js';

function Sobre() {
  return (
    <section id="sobre" className="content">
      <div id="left-menu" className="list-group left-menu">
        <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
        <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
        <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
      </div>
      <div className="img-bg">
        {/* AQUI VAI O MENU */}
        <div className="container">
          <div className="row">
            {/* AQUI VAI TODO O CONTEUDO DA PAGINA */}
            <div data-bs-spy="scroll" data-bs-target="#left-menu" data-bs-offset="0" class="scrollspy-example" tabindex="0">
              <h4 id="list-item-1">Item 1</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet rerum sunt animi delectus, corrupti omnis eius dolorem deserunt eligendi itaque quod dicta? Aut, consequuntur, accusamus aperiam nostrum reiciendis sunt reprehenderit eveniet fugiat repudiandae doloremque fugit esse accusantium suscipit sint odit! Doloribus numquam repellat, reprehenderit quam repellendus nesciunt perferendis unde vitae odit. Voluptates corrupti voluptatibus blanditiis quaerat. Laboriosam accusantium sed sit quidem et ut illo voluptate unde totam debitis ipsum numquam accusamus suscipit voluptatem tenetur, aliquid reprehenderit est eaque magni at? Nulla minima praesentium voluptates esse sint fugiat explicabo officiis suscipit neque, ratione rem molestiae pariatur sunt aut nobis tempora porro est aliquam tenetur quasi architecto harum laboriosam dolorem modi? Eius quo quibusdam facere nostrum inventore temporibus labore, tempore cumque autem omnis, ipsam fugit tempora dicta unde quas eaque ullam. Tempore magnam, voluptas mollitia deleniti minus neque et cum rem beatae ipsa dolorum dolorem ducimus quas officiis similique, tempora dolore.</p>
              <h4 id="list-item-2">Item 2</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet rerum sunt animi delectus, corrupti omnis eius dolorem deserunt eligendi itaque quod dicta? Aut, consequuntur, accusamus aperiam nostrum reiciendis sunt reprehenderit eveniet fugiat repudiandae doloremque fugit esse accusantium suscipit sint odit! Doloribus numquam repellat, reprehenderit quam repellendus nesciunt perferendis unde vitae odit. Voluptates corrupti voluptatibus blanditiis quaerat. Laboriosam accusantium sed sit quidem et ut illo voluptate unde totam debitis ipsum numquam accusamus suscipit voluptatem tenetur, aliquid reprehenderit est eaque magni at? Nulla minima praesentium voluptates esse sint fugiat explicabo officiis suscipit neque, ratione rem molestiae pariatur sunt aut nobis tempora porro est aliquam tenetur quasi architecto harum laboriosam dolorem modi? Eius quo quibusdam facere nostrum inventore temporibus labore, tempore cumque autem omnis, ipsam fugit tempora dicta unde quas eaque ullam. Tempore magnam, voluptas mollitia deleniti minus neque et cum rem beatae ipsa dolorum dolorem ducimus quas officiis similique, tempora dolore.</p>
              <h4 id="list-item-3">Item 3</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet rerum sunt animi delectus, corrupti omnis eius dolorem deserunt eligendi itaque quod dicta? Aut, consequuntur, accusamus aperiam nostrum reiciendis sunt reprehenderit eveniet fugiat repudiandae doloremque fugit esse accusantium suscipit sint odit! Doloribus numquam repellat, reprehenderit quam repellendus nesciunt perferendis unde vitae odit. Voluptates corrupti voluptatibus blanditiis quaerat. Laboriosam accusantium sed sit quidem et ut illo voluptate unde totam debitis ipsum numquam accusamus suscipit voluptatem tenetur, aliquid reprehenderit est eaque magni at? Nulla minima praesentium voluptates esse sint fugiat explicabo officiis suscipit neque, ratione rem molestiae pariatur sunt aut nobis tempora porro est aliquam tenetur quasi architecto harum laboriosam dolorem modi? Eius quo quibusdam facere nostrum inventore temporibus labore, tempore cumque autem omnis, ipsam fugit tempora dicta unde quas eaque ullam. Tempore magnam, voluptas mollitia deleniti minus neque et cum rem beatae ipsa dolorum dolorem ducimus quas officiis similique, tempora dolore.</p>
              <h4 id="list-item-4">Item 4</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet rerum sunt animi delectus, corrupti omnis eius dolorem deserunt eligendi itaque quod dicta? Aut, consequuntur, accusamus aperiam nostrum reiciendis sunt reprehenderit eveniet fugiat repudiandae doloremque fugit esse accusantium suscipit sint odit! Doloribus numquam repellat, reprehenderit quam repellendus nesciunt perferendis unde vitae odit. Voluptates corrupti voluptatibus blanditiis quaerat. Laboriosam accusantium sed sit quidem et ut illo voluptate unde totam debitis ipsum numquam accusamus suscipit voluptatem tenetur, aliquid reprehenderit est eaque magni at? Nulla minima praesentium voluptates esse sint fugiat explicabo officiis suscipit neque, ratione rem molestiae pariatur sunt aut nobis tempora porro est aliquam tenetur quasi architecto harum laboriosam dolorem modi? Eius quo quibusdam facere nostrum inventore temporibus labore, tempore cumque autem omnis, ipsam fugit tempora dicta unde quas eaque ullam. Tempore magnam, voluptas mollitia deleniti minus neque et cum rem beatae ipsa dolorum dolorem ducimus quas officiis similique, tempora dolore.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;