// 记录角色权限对应的路由
const roleToRouter = {
  coustomer: [{
    name: 'Production',
  }, {
    name: 'Prolist',
  }, {
    name: 'Proadd',
  }],
  admin: [{
    name: 'Production',
  }, {
    name: 'Prolist',
  }, {
    name: 'Proadd',
  }, {
    name: 'Classmanage',
  }],
};
/**
 * 根据角色返回路由数组
 * @param {Array} routes
 * @param {String} role
 */
export default function getMenuRoutes(routes, role) {
  const allow = roleToRouter[role].map((item) => item.name);
  const result = routes.filter((r) => {
    const obj = r;
    if (allow.indexOf(r.name) !== -1) {
      const { children } = obj;
      obj.children = children.filter((child) => allow.indexOf(child.name) !== -1);
      return true;
    }
    return false;
  });
  return result;
}
