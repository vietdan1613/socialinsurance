const TENANT_CONFIG_URL = {
    xomchieu: 'https://xomchieu.bhxh-online.com/api',
    thuduc: 'https://thuduc.bhxh-online.com/api',
    default: 'https://api.example.com',
}

const TENANT_CONFIG_NAME = {
    xomchieu: 'XÓM CHIẾU',
    thuduc: 'THỦ ĐỨC',
    default: '',
}

export function getTenantName(tenant) {
    return TENANT_CONFIG_NAME[tenant] || TENANT_CONFIG_NAME.default
}

export function getTenant(tenant) {
    return TENANT_CONFIG_URL[tenant] || TENANT_CONFIG_URL.default
}

