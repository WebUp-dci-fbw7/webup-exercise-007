/*
 * Exercise 007: Create a password generator
 *
 * Tasks & Features:
 *   1. Fork this CodePen, wich includes Bootstrap 4.
 *   2. Use the constant "charset" in your function (move it there). It contains all characters to use.
 *   3. Your function should have 2 arguments:
 *      - length    (Number)  The length of the password
 *      - mixedCase (Boolean) Wether or not to use mixed cases (lowercase + uppercase)
 *   4. If the second argument is true, use uppercase for every third character.
 *   5. Use the function getRandomInt() that is included in this CodePen to generate random numbers where you need them.
 *   6. Register an onClick event for the button to generate a new password.
 *   7. Update the generated password inside of the "output" element.
 *   8. Generate the first password as soon as the page is loaded, using a default length of 20.
 *
 * Examples for generated passwords:
 *   - 876FocMkcCv98teXc(Ov
 *   - %lfXcrLt-#ke3r6R5§-?
 *   - Nd1Z$yRx
 *
 * Bonus version:
 *   1. Add an input field to define the length of the password.
 *   2. Add a checkbox to define if the password should youse mixed cases.
 *   3. Generate a new password on change of the input elements.
 */

const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
