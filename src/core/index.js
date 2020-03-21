import { isObject, isFunction, isString } from "@/utils/index";
import { keys, forEach } from "lodash";
import eventEmitter from "event-emitter";

export default class Core {
  constructor(config) {
    // TODO
    // 配置项可以根据具体业务来处理

    eventEmitter(this);
    forEach(keys(Core.plugins), plugin => {
      Core.plugins[plugin].call(this);
    });
  }

  destroy(){
    this.emit('destroy');
  }

  static install(pluginName, plugin) {
    debugger
    if (!isString(pluginName)) {
      throw new TypeError("pluginName is not a string");
    }
    if (!isFunction(plugin)) {
      throw new TypeError("plugin is not a function");
    }
    if (!isObject(Core.plugins)) {
      Core.plugins = {};
    }
    Core.plugins[pluginName] = plugin;
  }
}
