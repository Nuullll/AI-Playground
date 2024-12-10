// https://github.com/intel/compute-runtime/blob/master/shared/source/dll/devices/devices_base.inl
const ID2ARCH: { [key: number]: string } = {
    // bmg
    0xE202: "bmg",
    0xE20B: "bmg",
    0xE20C: "bmg",
    0xE20D: "bmg",
    0xE212: "bmg",

    // lnl
    0x6420: "lnl",
    0x64A0: "lnl",
    0x64B0: "lnl",

    // dg2
    0x4F80: "dg2",
    0x4F81: "dg2",
    0x4F82: "dg2",
    0x4F83: "dg2",
    0x4F84: "dg2",
    0x4F85: "dg2",
    0x4F86: "dg2",
    0x4F87: "dg2",
    0x4F88: "dg2",
    0x5690: "dg2",
    0x5691: "dg2",
    0x5692: "dg2",
    0x5693: "dg2",
    0x5694: "dg2",
    0x5695: "dg2",
    0x5696: "dg2",
    0x5697: "dg2",
    0x56A3: "dg2",
    0x56A4: "dg2",
    0x56B0: "dg2",
    0x56B1: "dg2",
    0x56B2: "dg2",
    0x56B3: "dg2",
    0x56BA: "dg2",
    0x56BB: "dg2",
    0x56BC: "dg2",
    0x56BD: "dg2",
    0x56BE: "dg2",
    0x56BF: "dg2",
    0x56A0: "dg2",
    0x56A1: "dg2",
    0x56A2: "dg2",
    0x56A5: "dg2",
    0x56A6: "dg2",
    0x56C0: "dg2",
    0x56C1: "dg2",
    0x56C2: "dg2",

    // mtl
    0x7D40: "mtl",
    0x7D55: "mtl",
    0x7DD5: "mtl",
    0x7D45: "mtl",

    // // arl
    // 0x7D67: "arl",
    // 0x7D51: "arl",
    // 0x7DD1: "arl",
    // 0x7D41: "arl",
};

export function getDeviceArch(deviceId: number): string {
    return ID2ARCH[deviceId] || "unknown";
}
