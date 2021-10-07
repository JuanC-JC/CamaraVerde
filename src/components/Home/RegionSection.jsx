import React, { useState, useEffect, useCallback } from "react";
import Map from "../Map/Map";
import "../../styles/components/Home/RegionSection.scss";

const departments = [
  {
    name: "Arauca",
    info: {
      history:"El territorio de Arauca estaba habitado antes de la conquista española por araucas, yaruros, chinatos, betoyes, giraras, tunebos, airicos, macaguanes, eles, lipas, guahíbos, achaguas, cuibas, chiricoas, lucalías, piapocos, maipures y cuilotos. Luego en 1536 llegan a tierras araucanas los conquistadores Nicolás de Federman y Jorge de Espira, pasando por la cordillera oriental. Para 1659, las misiones jesuitas Francisco Jimeno, Francisco",
      food:"Food -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
      general:"General - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
    },
    path:
      "M292.762 192L286.262 194.5L281.762 201L285.262 202L288.762 203L291.762 205H295.262L297.762 203.5L304.762 202H307.262L313.262 199.5L318.762 201L327.262 199.5L333.762 197.5H335.262L345.762 199L349.762 198.5L356.262 199.5L359.262 198H363.762L367.262 197L372.262 196.5L375.762 196L379.262 195.5L381.762 197.5L385.262 199.5L388.262 200.5L393.762 204L398.262 203H404.262L410.762 201.5V198.5L381.262 172.5L370.762 174.5L366.262 172.5L353.762 169.5L339.762 174.5L336.262 172.5H325.762L313.262 174.5L307.262 172.5L298.762 174.5V181.5L292.762 192Z",
    data: ['history', 'food', 'general'],
  },
  {
    name: "Casanare",
    info: {
      history:"Casanare es uno de los treinta y dos departamentos que, junto con Bogotá, Distrito Capital, forman la República de Colombia. Su capital es Yopal. Está ubicado en la región Orinoquía, limitando al norte con Arauca, al este con Vichada, al sur con Meta, al oeste con Cundinamarca y al noroeste con Boyacá.",
      food:"Food -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
      general:"General - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
    },
    path:
      "M256.262 247V250.5L258.262 251L260.762 252.5L262.762 256L267.762 259L273.262 263L276.262 262L277.762 261H288.262L290.262 259L299.762 257.5L301.762 258.5L306.262 257.5L309.262 254L317.762 252.5L320.762 249L342.762 242.5L347.262 234.5L351.762 233L356.762 230.5L366.762 221L375.262 217.5H381.762L388.762 209.5L393.762 204L388.262 200.5L385.262 199.5L381.762 197.5L379.262 195.5L372.262 196.5L367.262 197L363.762 198H359.262L356.262 199.5L349.762 198.5L345.762 199L335.262 197.5H333.762L327.262 199.5L318.762 201L313.262 199.5L307.262 202H304.762L297.762 203.5L295.262 205H291.762L288.762 203L281.762 201L284.262 207C284.262 209.167 284.662 213.6 286.262 214C287.862 214.4 289.262 217.167 289.762 218.5L287.762 224L284.262 222L279.262 226L275.262 229L272.762 231.5L265.262 229L259.262 234.5L261.262 237L263.762 239L257.762 242V244.5L256.262 247Z",
    data: ['history', 'food', 'general'],
  },
  {
    name: "Vichada",
    info: {
      history: "Vichada es uno de los treinta y dos departamentos que, junto con Bogotá, Distrito Capital, forman la República de Colombia. Su capital es Puerto Carreño. Está ubicado al este del país, en las regiones Orinoquía y Amazonia, limitando al norte con Casanare y Arauca, al norte y este con Venezuela, al sur con Guainía, al suroeste con Guaviare y al oeste con Meta. Con 101 000 km², es el segundo departamento más extenso por detrás de Amazonas",
      food:"Food -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
      general:"General - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
    },
    path:
      "M415.262 198.5H410.762V201.5L404.262 203H398.262L393.762 204L388.762 209.5L381.762 217.5H375.262L366.762 221L356.762 230.5L351.762 233L347.262 234.5L342.762 242.5L347.262 304.5L350.262 305.5H355.762L356.762 307H359.762L362.262 308.5L364.762 307V304.5L369.762 305.5L370.762 308L383.762 303V300.5L381.762 297.5L383.762 295L389.262 294V290.5L386.262 288L389.262 286.5L395.262 288V286.5H399.262L397.262 283H401.262L405.762 281.5L410.762 280V277H417.262H421.262H427.762H434.262L437.762 276L442.762 277V276L446.262 273.5H449.262L458.262 272C459.095 271.333 460.862 269.8 461.262 269L464.262 267L469.262 266L471.762 266.5L478.762 266L482.262 267L485.762 267.5L491.762 263.5L487.262 256C487.428 254.833 487.662 252.4 487.262 252C486.762 251.5 483.262 247 483.262 246.5C483.262 246.1 483.928 246 484.262 246L483.762 243.5C484.095 242.667 484.762 240.9 484.762 240.5C484.762 240.1 484.428 238 484.262 237V233L485.762 230.5L484.262 227L483.262 223.5L485.262 220L489.262 217.5L491.762 214.5C491.595 212.667 491.262 208.9 491.262 208.5C491.262 208.1 492.595 205.333 493.262 204L497.762 201.5L500.262 198.5C499.428 197.833 497.662 196.4 497.262 196C496.762 195.5 497.762 194 497.762 193.5C497.762 193.1 496.428 192.333 495.762 192L491.262 190.5L485.762 190H479.762L475.262 193.5H472.262L468.762 193L463.762 194L459.262 195.5L456.262 194.5L452.262 195L446.262 197L441.762 196L434.262 195L425.762 196L421.262 199.5C419.262 200.5 416.262 197.667 415.262 198.5Z",
    data: ['history', 'food', 'general'],
  },
  {
    name: "Meta",
    info: {
      history: "Meta es un departamento del centro de Colombia, que comprende el área desde los Andes al oeste, hasta las llanuras de Los Llanos. Su capital, Villavicencio, está rodeada de cerros y llanuras al noroeste. Es conocida por sus parques, el baile del joropo y el coleo. La catedral Nuestra Señora del Carmen, construida en el siglo XIX",
      food:"Food -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
      general:"General - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
    },
    path:
      "M193.262 312L181.262 309.5L183.762 306.5V304.5L189.762 301.5L194.262 294.5V289.5L198.262 284.5H201.762L205.262 281.5L210.762 274.5L213.262 273L218.262 271H221.262L226.262 267.5H227.762L226.262 262.5V257H229.262L239.762 262.5L246.762 264H255.762L258.262 259.5L256.762 251L258.762 251.5L261.262 253L263.262 256.5L268.262 259.5L273.762 263.5L276.762 262.5L278.262 261.5H282.762H288.762L290.762 259.5L300.262 258L302.262 259L306.762 258L309.762 254.5L318.262 253L321.262 249.5L343.262 243L347.762 305L341.762 306H339.262L336.762 305L333.262 306.5H329.262L326.262 307.5H321.262L318.262 306.5L314.262 308L310.262 309.5L306.762 309L303.762 307.5L301.762 306.5L299.262 308L299.762 311.5L294.262 309.5L282.762 314L280.262 316L270.262 318L263.262 322L249.762 324.5H240.762L237.262 325.5L238.762 348.5H232.262L226.762 350L221.762 348.5L217.762 347.5L214.762 345L210.262 343H202.762L199.262 341L195.262 336V331L193.262 328L191.762 323.5V318L195.262 316L193.262 314V312Z",
    data: ['history', 'food', 'general'],
  },

  {
    name: "Guainia",
    info: {
      history: "Guainía (idioma yurí: Tierra de muchas aguas) es uno de los treinta y dos departamentos que, junto con Bogotá, Distrito Capital, forman la República de Colombia. Su capital es Inírida. Está ubicado al este del país, en la región Amazonia, limitando al norte con Vichada, al este con Venezuela, al sur con Brasil, al suroeste con Vaupés y al oeste con Guaviare. Con 72 238 km² es el quinto departamento más extenso —por detrás de Amazonas, Vichada, Caquetá y Meta—",
      food:"Food -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
      general:"General - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
    },
    path:
      "M498.762 272L496.262 271L491.762 263.5L485.762 267.5L482.262 267L478.762 266L471.762 266.5L469.262 266L464.262 267L461.262 269C460.862 269.8 459.095 271.333 458.262 272L449.262 273.5H446.262L442.762 276V277L437.762 276L434.262 277H410.762V280L405.762 281.5L401.262 283H397.262L399.262 286.5H395.262V288L389.262 286.5L386.262 288L389.262 290.5V294L383.762 295L381.762 297.5L383.762 300.5V303L370.762 308L365.762 311L356.762 314L362.262 316L364.762 318.5L370.262 323L372.762 324L376.262 324.5L378.262 323.5L381.762 325L384.762 324L388.762 324.5L391.762 323L394.762 323.5V325L391.762 328L390.762 330L388.262 334.5L390.762 337L395.762 339L397.262 340L401.762 340.5L404.762 341C404.362 340.2 405.095 339.667 405.762 339.5L407.762 338.5L409.762 338L412.262 338.5L417.262 337L422.262 338.5L452.762 337L476.262 336L477.762 335L474.262 334.5L472.262 333V331.5L474.262 329.5L473.262 327.5H474.762L475.762 328.5L477.762 329.5L478.762 332L482.762 336L487.262 335L492.262 333L496.762 330.5L497.762 327.5L501.262 324.5L506.762 323H510.762L513.762 326.5L518.262 332L521.762 336L524.262 342.5L523.262 348L524.262 353H526.762L534.762 350L533.262 348H534.762L533.262 346.5C531.928 344.333 529.162 339.8 528.762 339C528.362 338.2 526.595 333 525.762 330.5C524.762 329.333 522.562 326.7 521.762 325.5C520.962 324.3 521.428 323.333 521.762 323L517.262 319.5L518.262 315.5L506.762 307.5L504.762 306L501.262 305.5L499.262 302L491.262 300.5L487.262 302V300L494.762 296C495.428 295.167 496.962 293.4 497.762 293C498.562 292.6 506.428 286.5 510.262 283.5L511.262 281L506.762 278.5L503.762 275L501.262 271L498.762 272Z",
    data: ['history', 'food', 'general'],
  },
  {
    name: "Caqueta",
    info: {
      history: "Caquetá es uno de los treinta y dos departamentos que, junto con Bogotá, Distrito Capital, forman la República de Colombia. Su capital es Florencia. Está ubicado al sur del país, en la región Amazonia, limitando al norte con Meta y Guaviare, al noreste con Vaupés, al sur con Amazonas y Putumayo, y al oeste con Cauca y Huila. Con 88 965 km² es el tercer departamento más extenso —por detrás de Amazonas y Vichada—.",
      food:"Food -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
      general:"General - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
    },
    path:
      "M131.762 366.5L133.762 369H139.262L142.762 371.5L144.762 375H148.762L152.262 373.5L157.262 375V376.5L161.262 377.5L165.762 376.5L168.262 377.5V379.5L171.762 382L171.262 383.5L171.762 385.5H180.762L183.262 387V390L182.262 392.5L185.762 394L192.262 393.5L195.262 395L193.762 397L197.762 402.5L202.762 404.5H205.762L209.762 402.5L214.762 403.5L213.762 405.5L216.262 407.5L223.762 408.5L225.762 410.5L231.262 412H239.262L243.762 414.5L246.762 415.5L251.762 414.5L256.762 415.5L261.262 418L266.762 415.5L271.762 416L275.762 417L280.762 415.5L285.762 419L290.762 420V418L294.762 415.5L296.762 416.5L301.262 417L303.262 415L305.762 411L309.262 409V407.5L312.262 404L318.762 405.5L322.262 404V401L323.762 400L328.762 397L333.762 393V392L328.762 390L324.762 386.5H320.762L318.762 385V384L316.262 383C315.928 382.5 315.262 381.3 315.262 380.5C315.262 379.7 313.928 379.5 313.262 379.5L311.262 378.5L312.262 377.5L306.262 375L299.762 373.5L298.762 370.5L294.762 368L291.762 362.5H287.762L283.762 360.5L280.762 359L277.762 360L275.762 359.5L274.262 361L271.262 365L268.762 366L265.762 368.5L261.262 368L254.262 365L248.762 361L246.762 357L242.262 354.5L241.262 352.5L238.762 351L238.262 348H231.762L226.262 349.5L221.262 348L217.262 347L214.262 344.5L209.762 342.5H202.262L198.762 340.5L194.762 335.5V330.5L192.762 327.5L191.262 323V317.5L194.762 315.5L192.762 313.5V311.5L180.762 309L175.762 311L177.262 319L164.262 322V329L157.262 333L156.262 336.5L152.762 338.5L147.262 343.5L141.762 350.5H137.762L133.762 352L127.762 355.5L124.262 358V362L127.762 365L129.262 366.5H131.762Z",
    data: ['history', 'food', 'general'],
  },
  {
    name: "Guaviare",
    info: {
      history: "Guaviare es uno de los treinta y dos departamentos que, junto con Bogotá, Distrito Capital, forman la República de Colombia. Su capital es San José del Guaviare. Está ubicado en la región Amazonia, limitando al norte con Meta, al noreste con Vichada y al sur con Vaupés y Caquetá. Con 77,276 hab. según estimaciones del DANE,5​ es el quinto departamento menos poblado —por delante de Amazonas, San Andrés y Providencia, Guainía y Vaupés— y con 2,04 hab/km²",
      food:"Food -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
      general:"General - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
    },
    path:
      "M236.762 325L238.262 348L238.762 351L241.262 352.5L242.262 354.5L246.762 357L248.762 361L254.262 365L261.262 368L265.762 368.5L268.762 366L271.262 365L274.262 361L275.762 359.5L277.762 360L280.762 359L287.762 362.5H291.762L294.762 368L298.762 370.5L299.762 373.5L306.262 375L312.262 377.5L311.762 375L314.262 373L318.762 370.5L320.762 366.5L324.762 365L327.762 364L328.262 360.5L332.762 361L329.762 355L332.762 351L335.262 345.5V342L340.262 343L343.262 342L349.762 339.5L353.762 339L356.762 335H360.762H366.762L374.262 333.5L385.262 331L390.762 330L391.762 328L394.762 325V323.5L391.762 323L388.762 324.5L384.762 324L381.762 325L378.262 323.5L376.262 324.5L372.762 324L370.262 323L364.762 318.5L362.262 316L356.762 314L365.762 311L370.762 308L369.762 305.5L364.762 304.5V307L362.262 308.5L359.762 307H356.762L355.762 305.5H350.262L347.262 304.5L341.262 305.5H338.762L336.262 304.5L332.762 306H328.762L325.762 307H320.762L317.762 306L309.762 309L306.262 308.5L301.262 306L298.762 307.5L299.262 311L293.762 309L282.262 313.5L279.762 315.5L269.762 317.5L262.762 321.5L249.262 324H240.262L236.762 325Z",
    data: ['history', 'food', 'general'],
  },
  {
    name: "Vaupes",
    info: {
      history: "Vaupés es uno de los treinta y dos departamentos que, junto con Bogotá, Distrito Capital, forman la República de Colombia. Su capital es Mitú. Está ubicado al sureste del país, en la región Amazonía, limitando al norte con el Guaviare y Guainía, al este con Brasil, al sur con Amazonas y al oeste con el Caquetá. Con unos 43 000 habitantes en 2015 es el segundo departamento menos poblado —por delante de Guainía— y con 0,79 hab/km²",
      food:"Food -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
      general:"General - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
    },
    path:
      "M428.262 429.5L427.512 427.25M427.512 427.25L426.762 425L420.262 420L418.762 416.5L422.262 413L418.762 411L417.262 409L412.262 407L409.262 405.5L406.262 402.5L402.762 400.5L397.762 397.5L396.262 376.5L397.762 375H406.262L409.262 373.5L412.262 372.5H415.762L420.262 370.5H422.262L426.762 372.5H435.262L437.762 370.5L435.262 367.5L433.762 364L432.262 361L424.762 359H406.262C405.262 353 405.162 341.8 404.762 341L401.762 340.5L397.262 340L395.762 339L390.762 337L388.262 334.5L390.762 330L385.262 331L374.262 333.5L366.762 335H356.762L353.762 339L349.762 339.5L343.262 342L340.262 343L335.262 342V345.5L332.762 351L329.762 355L332.762 361L328.262 360.5L327.762 364L324.762 365L320.762 366.5L318.762 370.5L314.262 373L311.762 375L312.262 377.5L311.262 378.5L313.262 379.5C313.928 379.5 315.262 379.7 315.262 380.5C315.262 381.3 315.928 382.5 316.262 383L318.762 384V385L320.762 386.5H324.762L328.762 390L333.762 392V393L338.762 390L341.762 392L344.262 395L346.262 394H347.762L351.262 396H354.262L358.762 397.5L359.762 400L361.262 403.5L363.762 407L367.262 405.5L369.262 406.5L371.262 405.5L374.262 406.5H376.262L378.762 407.5L381.762 411H383.762L385.762 409.5L389.762 408.5L392.262 409L392.762 410L388.262 411.5L389.262 413.5L390.762 415L389.762 418.5L390.262 420.5L392.262 422.5L390.262 424V426L392.762 427.25L394.262 429.5L396.262 430.5L398.262 429.5V428L396.262 426C398.095 425.5 401.962 424.5 402.762 424.5L403.762 426L403.262 428.5L406.762 429L408.262 427.25L409.762 428L412.762 429L414.762 428.5L413.762 426.5L416.262 427.5L416.762 429.5L415.762 432H417.262L418.762 431.5L421.762 432L424.762 431.5L424.262 428.5L427.512 427.25Z",
    data: ['history', 'food', 'general'],
  },
  {
    name: "Putumayo",
    info: {
      history:  "Putumayo (Quechua: Putumayu) es uno de los treinta y dos departamentos que, junto con Bogotá, Distrito Capital, forman la República de Colombia. Su capital es Mocoa y su ciudad más poblada es Puerto Asís. Está ubicado al suroeste del país, en la región Amazónica, limitando al norte con Cauca y Caquetá, al este con Amazonas, al sur con Perú y Ecuador, y al oeste con Nariño. La mayoría de sus municipios hace parte de los territorios focalizados PDET.",
      food:"Food -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
      general:"General - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
    },
    path:
      "M90.2617 388V392L96.7617 394.5H103.262H108.762H114.762H120.762L122.262 392L124.262 388H129.262L137.762 392L144.262 397L149.262 399.5H156.262L173.762 404V401.5H176.262L182.762 404L187.262 406.5H191.262L196.262 410.5L212.262 417.5L231.262 412L225.762 410.5L223.762 408.5L216.262 407.5L213.762 405.5L214.762 403.5L209.762 402.5L205.762 404.5H202.762L197.762 402.5L193.762 397L195.262 395L192.262 393.5L185.762 394L182.262 392.5L183.262 390V387L180.762 385.5H171.762L171.262 383.5L171.762 382L168.262 379.5V377.5L165.762 376.5L161.262 377.5L157.262 376.5V375L152.262 373.5L148.762 375H144.762L142.762 371.5L139.262 369H133.762L131.762 370L126.762 371.5H122.262L114.762 370C113.928 369.167 112.262 367.3 112.262 366.5V362L108.762 358L105.262 360L99.7617 362L88.7617 366.5L91.7617 373V376.5L94.2617 380.5L91.7617 383H87.2617L88.7617 387L90.2617 388Z",
    data: ['history', 'food', 'general'],
  },
  {
    name: "Amazonas",
    info: {
      history: "Amazonas es uno de los treinta y dos departamentos que, junto con Bogotá, Distrito Capital, forman la República de Colombia. Su capital es Leticia. Está ubicado en el extremo sur del país, en gran parte al sur de la línea ecuatorial, en la región Amazonia",
      food:"Food -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
      general:"General - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et.",
    },
    path:
      "M430.262 432.5L428.262 429.5L427.512 427.25L424.262 428.5L424.762 431.5L421.762 432L418.762 431.5L417.262 432H415.762L416.762 429.5L416.262 427.5L413.762 426.5L414.762 428.5L412.762 429L409.762 428L408.262 427.25L406.762 429L403.262 428.5L403.762 426L402.762 424.5C401.962 424.5 398.095 425.5 396.262 426L398.262 428V429.5L396.262 430.5L394.262 429.5L392.762 427.25L390.262 426V424L392.262 422.5L390.262 420.5L389.762 418.5L390.762 415L389.262 413.5L388.262 411.5L392.762 410L392.262 409L389.762 408.5L385.762 409.5L383.762 411H381.762L378.762 407.5L376.262 406.5H374.262L371.262 405.5L369.262 406.5L367.262 405.5L363.762 407L361.262 403.5L359.762 400L358.762 397.5L354.262 396H351.262L347.762 394H346.262L344.262 395L341.762 392L338.762 390L333.762 393L328.762 397L323.762 400L322.262 401V404L318.762 405.5L312.262 404L309.262 407.5V409L305.762 411L303.262 415L301.262 417L296.762 416.5L294.762 415.5L290.762 418V420L285.762 419L280.762 415.5L275.762 417L271.762 416L266.762 415.5L261.262 418L256.762 415.5L251.762 414.5L246.762 415.5L243.762 414.5L239.262 412H231.262L212.262 417.5V422.5L215.262 426V431.5H219.762L228.262 435L235.262 439H243.762L248.762 441.5V445.5L251.262 449V453L261.262 458V454.5H264.762L267.762 458V464L270.762 465L267.762 469.5L270.762 472L274.262 473L279.262 475H288.262L290.762 473L299.762 474L303.262 475L308.262 474L313.762 474.5L315.262 471H316.762L324.262 472L323.262 469.5L324.262 466L325.762 465L329.262 464L331.262 466L332.262 465L336.262 466H338.762L340.262 469.5H342.262L344.262 471L346.762 470H355.262L356.762 468L361.762 466V464L363.762 465H369.262L370.262 468.5H373.762L377.262 473H388.262L393.762 475L398.262 477L401.262 479L399.262 483.5L389.762 493.5L383.762 502.5L375.262 512.5L377.262 515H382.762L385.762 517L389.762 515H395.762L396.762 517L408.762 528L412.262 529.5L411.262 527V522.5L412.262 517L414.262 508L415.762 501.5L418.762 485L422.262 468.5L424.762 443.5L428.262 437L430.262 432.5Z",
    data: ['history', 'food', 'general'],
  },
];


export default function RegionSection() {

  const findDepartment = useCallback((dpt) => {
    return departments.find(department => department.name == dpt)
  })

  const [selectedDepartment, setSelectedDepartment] = useState(findDepartment('Amazonas'))
  const [selectedInfo, setSelectedInfo] = useState('history')


  const setSelection = (e) => {
    const department = findDepartment(e.currentTarget.id)

    
    if(selectedDepartment !== department){      
      setSelectedDepartment(findDepartment(e.currentTarget.id))
  
      document.querySelector('.info__parrafoInfo').animate({
        maxHeight: [ '0px', '230px'], 
      }, {duration:500, easing:'ease-in-out'});
    }
  }


  const setSelectInfo = (e) =>{

    console.log(e)
    // const typeInfo = e.currentTarget.dataset.typeInfo

    // if(typeInfo !== selectedInfo){      
    //   setSelectedInfo(e.currentTarget.dataset.typeInfo)
  
    //   document.querySelector('.info__parrafoInfo').animate({
    //     maxHeight: [ '0px', '230px'], 
    //   }, 500);
    // }
  }

  return (
    <section className='region'>

      <h2>Nuestra región</h2>

      <div className="region__container">
        <div className="region__info">
          <div className="info__text">
            <h3>{selectedDepartment.name}</h3>
            <div className='info__parrafoInfo'>
              <p className='preventResizeFont'>{selectedDepartment.info[selectedInfo]}</p>
            </div>
          </div>

          <div className="info__grahpicsItems">

            <svg onClick={(e)=>setSelectInfo(e.currentTarget)} data-typeInfo='history' className={`info__graphic ${selectedInfo === 'history' && 'info__graphic--selected'}`} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="24" stroke="#2a5b4b" strokeWidth="2"/>
              <path d="M15.4703 23.6667C14.5062 25.339 13.9991 27.2356 14 29.1659C14.0009 31.0962 14.5097 32.9923 15.4754 34.6637C16.4411 36.3351 17.8296 37.723 19.5015 38.6879C21.1733 39.6528 23.0697 40.1608 25 40.1608C26.9303 40.1608 28.8267 39.6528 30.4985 38.6879C32.1704 37.723 33.5589 36.3351 34.5246 34.6637C35.4903 32.9923 35.9991 31.0962 36 29.1659C36.0009 27.2356 35.4938 25.339 34.5297 23.6667L25.0018 9L15.4685 23.6667H15.4703Z" stroke="#205033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <svg onClick={(e)=>setSelectInfo(e.currentTarget)} data-typeInfo='food' className={`info__graphic ${selectedInfo === 'food' && 'info__graphic--selected'}`} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="24" stroke="#2a5b4b" strokeWidth="2"/>
              <path d="M21 28L13.0977 34C12.7644 35.5 13.0977 38.2 17.0977 37L22.5977 29.5006M22.5977 29.5006L23.597 30.5C28.597 28.5 28.597 36 32.597 37C35.797 37.8 36.2637 35.3333 36.097 34L27.7947 25.5M22.5977 29.5006L14.597 21.5C13.4304 19.6667 11.897 15.3 15.097 12.5L25.597 23.25M33.0977 12L27.0977 18C26.2639 18.8333 24.7965 21.05 25.597 23.25M25.597 23.25L27.7947 25.5M35.5977 15L29.5977 21M38.0977 17.5C36.0624 20.1667 31.1523 25.5 27.7947 25.5" stroke="#205033" strokeWidth="2"/>
            </svg>

            <svg onClick={(e)=>setSelectInfo(e.currentTarget)} data-typeInfo='general' className={`info__graphic ${selectedInfo === 'general' && 'info__graphic--selected'}`} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="24" stroke="#2a5b4b" strokeWidth="2"/>
              <path d="M25.1144 46.5V41C16.6144 39 4.94995 28.8 25.35 4" stroke="#2a5b4b" strokeWidth="2"/>
              <path d="M24.85 46.5V41C33.35 39 44.7484 28.8 24.3484 4" stroke="#2a5b4b" strokeWidth="2"/>
              <path d="M24.8496 41V16" stroke="#2a5b4b" strokeWidth="2"/>
              <path d="M19.3496 28.5L24.8496 34L30.3496 28.5" stroke="#2a5b4b" strokeWidth="2"/>
              <path d="M19.3496 18.5L24.8496 24L30.3496 18.5" stroke="#2a5b4b" strokeWidth="2"/>
            </svg>

          </div>
        </div>

        <Map
          selected={selectedDepartment}
          departments={departments}
          setSelection={setSelection}
        />

      </div>
    </section>
  )
}