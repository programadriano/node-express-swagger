const express = require("express");
const router = express.Router();
const controller = require("../controllers/personController");

/**
 * @typedef Person
 * @property {integer} id
 * @property {string} name.required - Nome da pessoa
 */

/**
 * @route Get /person
 * @returns {object} 200 - Array de Pessoas
 * @returns {Error}  default - error
 */
router.get("/", controller.get);

/**
 * @route Get /person/{id}
 * @param {intenger} id.param - Identificador de pessoa
 * @returns {object} 200 - Objeto Pessoa
 * @returns {Error}  default - error
 */
router.get("/:id", controller.getById);

/**
 * @route POST /person
 * @param {string} name.required - Nome da pessoa
 * @returns {Response.Person}  Status - 200
 * @returns {Error}  default - error
 */
router.post("/", controller.post);

/**
 * @route Put /person/{id}
 * @param {intenger} id - Identificador de pessoa
 * @param {Object.Person} Person - Nome da pessoa
 * @returns {Response.Person}  Status - 200
 * @returns {Error}  default - error
 */
router.put("/:id", controller.put);

/**
 * @route Delete /person/{id}
 * @param {intenger} id - Identificador de pessoa
 * @returns {Response.Person}  Status - 200
 * @returns {Error}  default - error
 */
router.delete("/id", controller.delete);

module.exports = router;
