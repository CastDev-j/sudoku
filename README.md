
![Screenshot 2025-02-08 103905](https://github.com/user-attachments/assets/c3229e50-b69b-404f-85a1-b5ae733731f3)

# [Sudoku](https://github.com/CastDev-j/sudoku)
Una aplicación web de sudoku con 4 niveles de dificultad. Construida con React, Typescript y Mantine.

![Screenshot 2025-02-08 104645](https://github.com/user-attachments/assets/f5946699-e29a-4e77-84ab-4af60f2309d2)

## Características
- Cuatro niveles de dificultad: Fácil, Medio, Difícil y Experto
- Persistencia de estado para que el progreso del juego se guarde entre sesiones del navegador
- Entrada por teclado/ratón y pantalla táctil
- Modo oscuro

![Screenshot 2025-02-08 104715](https://github.com/user-attachments/assets/feab929c-95ac-4055-8e5d-73f50656eafa)

![Screenshot 2025-02-08 104655](https://github.com/user-attachments/assets/95eb6641-701a-4f8c-abac-ef0c59672abb)

![Screenshot 2025-02-08 104635](https://github.com/user-attachments/assets/b003cb86-b792-4d14-b5ee-658ecfe032f8)


### Documentación del Proyecto: Implementación de un Juego de Sudoku en React

#### Introducción
Este proyecto consiste en la implementación de un juego de Sudoku utilizando React, TypeScript y bibliotecas complementarias como Mantine para la interfaz de usuario y Zustand para la gestión del estado. El objetivo es proporcionar una experiencia de juego fluida y responsive, respetando las reglas tradicionales del Sudoku y ofreciendo funcionalidades adicionales como la gestión de notas, la selección de dificultad y la validación automática del tablero.

A continuación, se detalla la estructura del proyecto, los principios teóricos del Sudoku, la lógica de generación de los rompecabezas y los cálculos asociados a cada dificultad.

---

### Estructura del Proyecto

#### 1. **Gestión del Estado (Zustand)**
El estado global del juego se gestiona mediante Zustand, una biblioteca ligera y eficiente para la gestión de estados en React. El estado incluye las siguientes propiedades clave:

- **`puzzle`**: Representa el estado actual del tablero de Sudoku. Es una cadena de 81 caracteres, donde cada carácter corresponde a una celda del tablero (los valores vacíos se representan con `"-"`).
- **`solution`**: Almacena la solución correcta del Sudoku generado. Se utiliza para validar el progreso del jugador.
- **`notes`**: Permite al jugador añadir notas en las celdas. Cada celda puede contener hasta 9 notas (números del 1 al 9).
- **`editableCells`**: Indica qué celdas son editables. Las celdas prellenadas al inicio del juego no son editables.
- **`selectedCell`**: Almacena el índice de la celda actualmente seleccionada por el jugador.
- **`gameClock`**: Registra el tiempo transcurrido desde el inicio del juego.
- **`difficulty`**: Define la dificultad del juego (fácil, medio, difícil, experto).

#### 2. **Componentes Principales**
El proyecto está organizado en componentes modulares que gestionan diferentes aspectos del juego:

- **`GameContainer`**: Es el contenedor principal del juego. Incluye el tablero de Sudoku, el selector de números y la información del juego (dificultad y tiempo).
- **`SudokuTable`**: Renderiza el tablero de 9x9 y maneja la interacción del usuario, como la selección de celdas y la entrada de números.
- **`NumberSelector`**: Permite al jugador seleccionar números o borrar valores en las celdas. También incluye un botón para alternar entre el modo de notas y el modo de entrada directa.
- **`NewGameModal`**: Un modal que permite al jugador seleccionar la dificultad y comenzar un nuevo juego.
- **`FinishGameModal`**: Se muestra cuando el jugador resuelve el Sudoku correctamente.
- **`GameInfoDisplay`**: Muestra la dificultad actual y el tiempo transcurrido.
- **`ThemeSwitcher`**: Permite cambiar entre temas claros y oscuros.

---

### Teoría del Sudoku

#### 1. **Reglas del Sudoku**
El Sudoku es un rompecabezas numérico que se juega en una cuadrícula de 9x9, dividida en 9 subcuadrículas de 3x3. Las reglas son las siguientes:

- Cada fila debe contener todos los números del 1 al 9 sin repeticiones.
- Cada columna debe contener todos los números del 1 al 9 sin repeticiones.
- Cada subcuadrícula de 3x3 debe contener todos los números del 1 al 9 sin repeticiones.
- Al inicio del juego, algunas celdas están prellenadas con números. El jugador debe completar las celdas vacías respetando las reglas anteriores.

#### 2. **Generación del Sudoku**
La generación de Sudokus se realiza mediante la biblioteca `sudoku-gen`, que proporciona un generador de rompecabezas con diferentes niveles de dificultad. El proceso de generación sigue estos pasos:

1. **Creación de un Sudoku Válido**:
   - Se genera una cuadrícula completa y válida (llena con números del 1 al 9 respetando las reglas del Sudoku).
   - Esta cuadrícula se convierte en la solución del Sudoku.

2. **Eliminación de Celdas**:
   - Dependiendo de la dificultad seleccionada, se eliminan un número específico de celdas para crear el rompecabezas.
   - La cantidad de celdas eliminadas determina la dificultad:
     - **Fácil**: Se eliminan menos celdas, lo que resulta en un rompecabezas más sencillo.
     - **Medio**: Se eliminan más celdas, aumentando la complejidad.
     - **Difícil**: Se eliminan aún más celdas, requiriendo un mayor nivel de deducción.
     - **Experto**: Se elimina el máximo número de celdas, lo que resulta en un rompecabezas altamente desafiante.

3. **Validación de la Unicidad**:
   - El generador asegura que el rompecabezas tenga una única solución válida.

#### 3. **Validación del Tablero**
El juego valida automáticamente si el Sudoku ha sido resuelto correctamente comparando el estado actual del tablero (`puzzle`) con la solución generada (`solution`). Si todas las celdas coinciden, se muestra el modal de finalización del juego.

---

### Lógica y Cálculos

#### 1. **Manejo del Tiempo**
El tiempo de juego se gestiona mediante un intervalo que incrementa el `gameClock` cada segundo. El tiempo se muestra en formato de minutos y segundos utilizando la función `convertGameClockToString`.

#### 2. **Interacción del Usuario**
- **Selección de Celdas**: El jugador puede seleccionar celdas haciendo clic o usando las teclas de flecha.
- **Entrada de Números**: El jugador puede ingresar números directamente o usar el modo de notas para anotar posibles valores.
- **Borrado de Valores**: El jugador puede borrar números o notas utilizando la tecla "Borrar" o el botón correspondiente.

#### 3. **Dificultad y Generación del Juego**
- Al iniciar un nuevo juego, el jugador selecciona la dificultad, lo que afecta la cantidad de celdas prellenadas.
- La función `getSudoku` de `sudoku-gen` genera un nuevo Sudoku basado en la dificultad seleccionada. Por ejemplo:
  - **Fácil**: 36-45 celdas prellenadas.
  - **Medio**: 30-35 celdas prellenadas.
  - **Difícil**: 25-29 celdas prellenadas.
  - **Experto**: 17-24 celdas prellenadas.

#### 4. **Validación Automática**
El juego verifica constantemente si el tablero ha sido resuelto correctamente comparando el `puzzle` con la `solution`. Si todas las celdas coinciden, se activa el modal de finalización.
