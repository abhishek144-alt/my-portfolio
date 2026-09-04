/**
 * 8-Bit ALU Hardware Simulation
 * Matches RTL Design specifications:
 * - 9 Supported operations: ADD, SUB, AND, OR, XOR, NAND, NOR, SHL, SHR
 * - 4 Status Flags: Carry (C), Zero (Z), Overflow (V), Negative (N)
 */

document.addEventListener('DOMContentLoaded', () => {
  const inputA = document.getElementById('alu-operand-a');
  const inputB = document.getElementById('alu-operand-b');
  const opButtons = document.querySelectorAll('.alu-op-btn');
  
  const resultBinEl = document.getElementById('alu-res-bin');
  const resultHexEl = document.getElementById('alu-res-hex');
  const resultDecEl = document.getElementById('alu-res-dec');
  
  const flagCarryEl = document.getElementById('flag-carry');
  const flagZeroEl = document.getElementById('flag-zero');
  const flagOverflowEl = document.getElementById('flag-overflow');
  const flagNegativeEl = document.getElementById('flag-negative');

  if (!inputA || !inputB) return;

  let currentOp = 'ADD';

  opButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      opButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentOp = btn.dataset.op;
      computeALU();
    });
  });

  inputA.addEventListener('input', computeALU);
  inputB.addEventListener('input', computeALU);

  function parse8Bit(val) {
    let num = parseInt(val, 10);
    if (isNaN(num)) num = 0;
    return Math.max(0, Math.min(255, num));
  }

  function toBinary8(num) {
    const raw = (num & 0xFF).toString(2).padStart(8, '0');
    return `${raw.slice(0, 4)}_${raw.slice(4)}`;
  }

  function computeALU() {
    const A = parse8Bit(inputA.value);
    const B = parse8Bit(inputB.value);

    // Keep inputs clamped in UI
    inputA.value = A;
    inputB.value = B;

    let fullResult = 0;
    let carry = 0;
    let overflow = 0;

    switch (currentOp) {
      case 'ADD':
        fullResult = A + B;
        carry = fullResult > 255 ? 1 : 0;
        // Overflow in 2's complement: (A[7] == B[7]) && (Result[7] != A[7])
        const signA = (A >> 7) & 1;
        const signB = (B >> 7) & 1;
        const signRes = ((fullResult & 0xFF) >> 7) & 1;
        overflow = (signA === signB && signRes !== signA) ? 1 : 0;
        break;

      case 'SUB':
        fullResult = A - B;
        carry = A < B ? 1 : 0; // Borrow
        const sA = (A >> 7) & 1;
        const sB = (B >> 7) & 1;
        const sRes = (((fullResult & 0xFF)) >> 7) & 1;
        overflow = (sA !== sB && sRes !== sA) ? 1 : 0;
        break;

      case 'AND':
        fullResult = A & B;
        break;

      case 'OR':
        fullResult = A | B;
        break;

      case 'XOR':
        fullResult = A ^ B;
        break;

      case 'NAND':
        fullResult = ~(A & B) & 0xFF;
        break;

      case 'NOR':
        fullResult = ~(A | B) & 0xFF;
        break;

      case 'SHL':
        fullResult = A << 1;
        carry = (A & 0x80) ? 1 : 0;
        break;

      case 'SHR':
        fullResult = A >> 1;
        carry = (A & 0x01) ? 1 : 0;
        break;

      default:
        fullResult = 0;
    }

    const res8 = fullResult & 0xFF;
    const zero = res8 === 0 ? 1 : 0;
    const negative = ((res8 >> 7) & 1) === 1 ? 1 : 0;

    // Update displays
    if (resultBinEl) resultBinEl.textContent = `8'b${toBinary8(res8)}`;
    if (resultHexEl) resultHexEl.textContent = `0x${res8.toString(16).toUpperCase().padStart(2, '0')}`;
    if (resultDecEl) resultDecEl.textContent = `${res8}`;

    // Update Flags UI
    updateFlag(flagCarryEl, carry);
    updateFlag(flagZeroEl, zero);
    updateFlag(flagOverflowEl, overflow, true);
    updateFlag(flagNegativeEl, negative);
  }

  function updateFlag(el, active, isWarn = false) {
    if (!el) return;
    if (active) {
      el.classList.add(isWarn ? 'active-warn' : 'active');
    } else {
      el.classList.remove('active', 'active-warn');
    }
  }

  // Initial calculation
  computeALU();
});
