/**
 * @file index-key-system.ts
 * @description Implements the 20KB index.tsx key system for Zero Bandwidth gating.
 * As per sr.md: "ইউজার যখন index.tsx ফাইলটি রিড করে, তখন সেটি একটি গেটওয়ে কী হিসেবে কাজ করে।"
 */

export class IndexKeySystem {
  private static readonly KEY_SIZE_BYTES = 20 * 1024; // 20KB
  private secretKey: string | null = null;

  constructor() {
    this.secretKey = process.env.ZERO_BW_SECRET_KEY || "default_secret_key";
  }

  /**
   * Generates the 20KB key index file content.
   */
  public generateIndexKey(): Buffer {
    const header = Buffer.from(`NEPSENX_GATEWAY_KEY_V2.0\nID:${Date.now()}\n`);
    const padding = Buffer.alloc(
      IndexKeySystem.KEY_SIZE_BYTES - header.length,
      0x5a,
    ); // 'Z' for ZeroBW
    return Buffer.concat([header, padding]);
  }

  /**
   * Validates if the provided buffer matches the gateway requirements.
   */
  public validateKey(input: Buffer): boolean {
    return (
      input.length === IndexKeySystem.KEY_SIZE_BYTES &&
      input.toString().startsWith("NEPSENX_GATEWAY_KEY_V2.0")
    );
  }
}
