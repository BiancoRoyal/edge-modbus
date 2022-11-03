module.exports.RegisterMap = [
    {address: 0x0000, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1, format: '32BIT_INT_3412', size: 2, scale: "NONE", uom: "VOLTAGE_V", name: 'VOLTAGE_L1_VOLTS'},
    {address: 0x0002, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1, format: '32BIT_INT_3412', size: 2, scale: "NONE", uom: "VOLTAGE_V", name: 'VOLTAGE_L2_VOLTS'},
    {address: 0x0004, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1, format: '32BIT_INT_3412', size: 2, scale: "NONE", uom: "VOLTAGE_V", name: 'VOLTAGE_L3_VOLTS'},
    {address: 0x0006, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1, format: '32BIT_INT_3412', size: 2, scale: "NONE", uom: "VOLTAGE_V", name: 'VOLTAGE_L1L2_VOLTS'},
    {address: 0x0008, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1, format: '32BIT_INT_3412', size: 2, scale: "NONE", uom: "VOLTAGE_V", name: 'VOLTAGE_L2L3_VOLTS'},
    {address: 0x000A, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1, format: '32BIT_INT_3412', size: 2, scale: "NONE", uom: "VOLTAGE_V", name: 'VOLTAGE_L3L1_VOLTS'},
    {address: 0x0024, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1, format: '32BIT_INT_3412', size: 2, scale: "NONE", uom: "VOLTAGE_V", name: 'VOLTAGE_LN_SUM_VOLTS'},
    {address: 0x0026, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1, format: '32BIT_INT_3412', size: 2, scale: "NONE", uom: "VOLTAGE_V", name: 'VOLTAGE_LL_SUM_VOLTS'},
    {address: 0x0036, fnCode: 'F3_HOLDING_REGS', multiplier: 1, format: '16BIT_INT_HI_FIRST', size: 1, scale: "NONE", uom: "VOLTAGE_PHASE_SEQ", name: 'VOLTAGE_PHASE_SEQUENCE'},
    {address: 0x000C, fnCode: 'F3_HOLDING_REGS', multiplier: 0.001, format: '32BIT_INT_3412', size: 2, scale: "NONE", uom: "CURRENT_A", name: 'CURRENT_L1_AMPS'},
    {address: 0x000E, fnCode: 'F3_HOLDING_REGS', multiplier: 0.001, format: '32BIT_INT_3412', size: 2, scale: "NONE", uom: "CURRENT_A", name: 'CURRENT_L2_AMPS'},
    {address: 0x0010, fnCode: 'F3_HOLDING_REGS', multiplier: 0.001, format: '32BIT_INT_3412', size: 2, scale: "NONE", uom: "CURRENT_A", name: 'CURRENT_L3_AMPS'},
    {address: 0x0012, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1 * 0.001, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "POWER_ACTIVE_P", name: 'POWER_L1_KW'},
    {address: 0x0014, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1 * 0.001, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "POWER_ACTIVE_P", name: 'POWER_L2_KW'},
    {address: 0x0016, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1 * 0.001, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "POWER_ACTIVE_P", name: 'POWER_L3_KW'},
    {address: 0x0028, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1 * 0.001, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "POWER_ACTIVE_P", name: 'POWER_TOTAL_KW'},
    {address: 0x0018, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1 * 0.001, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "POWER_APPARENT_S", name: 'POWER_L1_KVA'},
    {address: 0x001A, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1 * 0.001, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "POWER_APPARENT_S", name: 'POWER_L2_KVA'},
    {address: 0x001C, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1 * 0.001, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "POWER_APPARENT_S", name: 'POWER_L3_KVA'},
    {address: 0x002A, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1 * 0.001, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "POWER_APPARENT_S", name: 'POWER_TOTAL_KVA'},
    {address: 0x001E, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1 * 0.001, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "POWER_REACTIVE_Q", name: 'POWER_L1_KVAR'},
    {address: 0x0020, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1 * 0.001, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "POWER_REACTIVE_Q", name: 'POWER_L2_KVAR'},
    {address: 0x0022, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1 * 0.001, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "POWER_REACTIVE_Q", name: 'POWER_L3_KVAR'},
    {address: 0x002C, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1 * 0.001, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "POWER_REACTIVE_Q", name: 'POWER_TOTAL_KVAR'},
    {address: 0x002E, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1 * 0.001, format: '32BIT_INT_3412', size: 2, name: 'POWER_DEMAND_KW'},
    {address: 0x0030, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1 * 0.001, format: '32BIT_INT_3412', size: 2, name: 'POWER_DEMAND_KVA'},
    {address: 0x0032, fnCode: 'F3_HOLDING_REGS', multiplier: 1, format: '16BIT_INT_HI_FIRST', size: 1, scale: "NONE", uom: "POWER_FACTOR", name: 'POWER_FACTOR_L1'},
    {address: 0x0033, fnCode: 'F3_HOLDING_REGS', multiplier: 1, format: '16BIT_INT_HI_FIRST', size: 1, scale: "NONE", uom: "POWER_FACTOR", name: 'POWER_FACTOR_L2'},
    {address: 0x0034, fnCode: 'F3_HOLDING_REGS', multiplier: 1, format: '16BIT_INT_HI_FIRST', size: 1, scale: "NONE", uom: "POWER_FACTOR", name: 'POWER_FACTOR_L3'},
    {address: 0x0035, fnCode: 'F3_HOLDING_REGS', multiplier: 1, format: '16BIT_INT_HI_FIRST', size: 1, scale: "NONE", uom: "POWER_FACTOR", name: 'POWER_FACTOR_TOTAL'},
    {address: 0x0037, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1, format: '16BIT_INT_HI_FIRST', size: 1, scale: "NONE", uom: "FREQUENCY_HZ", name: 'FREQUENCY_HZ'},
    {address: 0x003E, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "ENERGY_ACTIVE_P", name: 'ENERGY_IMP_TOTAL_KWH'},
    {address: 0x0040, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "ENERGY_REACTIVE_Q", name: 'ENERGY_IMP_TOTAL_KVARH'},
    {address: 0x005C, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "ENERGY_ACTIVE_P", name: 'ENERGY_EXP_TOTAL_KWH'},
    {address: 0x005E, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "ENERGY_REACTIVE_Q", name: 'ENERGY_EXP_TOTAL_KVARH'},
    {address: 0x0046, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "ENERGY_ACTIVE_P", name: 'ENERGY_IMP_L1_KWH'},
    {address: 0x0048, fnCode: 'F3_HOLDING_REGS', multiplier: 0.1, format: '32BIT_INT_3412', size: 2, scale: "KILO", uom: "ENERGY_ACTIVE_P", name: 'ENERGY_IMP_L2_KWH'},
];
module.exports.EnumMap = [];