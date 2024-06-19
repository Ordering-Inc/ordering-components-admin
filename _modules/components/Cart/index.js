"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cart = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _OrderContext = require("../../contexts/OrderContext");
var _ConfigContext = require("../../contexts/ConfigContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Cart = exports.Cart = function Cart(props) {
  var _stateConfig$order;
  var UIComponent = props.UIComponent,
    handleEditProduct = props.handleEditProduct;

  /**
   * Order context manager
   */
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    _useOrder2$ = _useOrder2[1],
    updateProduct = _useOrder2$.updateProduct,
    removeProduct = _useOrder2$.removeProduct,
    clearCart = _useOrder2$.clearCart;

  /**
   * Config context manager
   */
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    stateConfig = _useConfig2[0];

  /**
   * Total product in cart
   */
  var totalBalance = ((_stateConfig$order = stateConfig.order) === null || _stateConfig$order === void 0 ? void 0 : _stateConfig$order.quantity) || 0;

  /**
   * Max total product in cart by config
   */
  var maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance;
  /**
   * Calc balance by product id
   */
  var getProductMax = function getProductMax(product) {
    var productMax = product.inventoried ? product.stock : maxCartProductConfig;
    var max = product.quantity + productMax - product.balance;
    return max < product.quantity ? product.quantity : max;
  };

  /**
   * Calc balance by product id
   */
  var offsetDisabled = function offsetDisabled(product) {
    var productMax = product.inventoried ? product.stock : maxCartProductConfig;
    return productMax - (product.balance - product.quantity);
  };

  /**
   * Change product quantity of the cart
   */
  var changeQuantity = function changeQuantity(product, quantity) {
    if (quantity === 0) {
      removeProduct(product);
    } else {
      updateProduct({
        id: product.id,
        business_id: product.business_id,
        code: product.code,
        quantity: quantity
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    carts: orderState.carts,
    orderState: orderState,
    clearCart: clearCart,
    removeProduct: removeProduct,
    changeQuantity: changeQuantity,
    getProductMax: getProductMax,
    offsetDisabled: offsetDisabled,
    handleEditProduct: handleEditProduct
  })));
};
Cart.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Function to edit product behavior
   */
  handleEditProduct: _propTypes.default.func,
  /**
   * String filter to fetch validation fields
   */
  validationFieldsType: _propTypes.default.string
};