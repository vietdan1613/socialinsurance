const TENANT_CONFIG_URL = {
    xomchieu: 'https://xomchieu.bhxh-online.com/api',
    thuduc: 'https://thuduc.bhxh-online.com/api',
    chanhhung: 'https://chanhhung.bhxh-online.com/api',
    anlac: 'https://anlac.bhxh-online.com/api',
    caukieu: 'https://caukieu.bhxh-online.com/api',
    binhthoi: 'https://binhthoi.bhxh-online.com/api',
    default: 'https://api.example.com',
}

const TENANT_CONFIG_NAME = {
    xomchieu: 'XÓM CHIẾU',
    thuduc: 'THỦ ĐỨC',
    chanhhung: 'CHÁNH HƯNG',
    anlac: 'AN LẠC',
    caukieu: 'CẦU KIỆU',
    binhthoi: 'BÌNH THỚI',
    default: '',
}

const TENANT_CONFIG_NOPHS = {
    xomchieu: '1',
    thuduc: '1',
    chanhhung: '2',
    anlac: '2',
    caukieu: '1',
    binhthoi: '1',
    default: '1',
}

const TENANT_CONFIG_TRAKQ = {
    xomchieu: '3',
    thuduc: '2',
    chanhhung: '1',
    anlac: '3',
    caukieu: '2',
    binhthoi: '3',
    default: '3',
}
export function getTenantNopHS(tenant) {
    return TENANT_CONFIG_NOPHS[tenant] || TENANT_CONFIG_NOPHS.default
}

export function getTenantTraKQ(tenant) {
    return TENANT_CONFIG_TRAKQ[tenant] || TENANT_CONFIG_TRAKQ.default
}

export function getTenantName(tenant) {
    return TENANT_CONFIG_NAME[tenant] || TENANT_CONFIG_NAME.default
}

export function getTenant(tenant) {
    return TENANT_CONFIG_URL[tenant] || TENANT_CONFIG_URL.default
}

