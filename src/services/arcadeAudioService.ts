// Arcade Audio Synthesizer using Web Audio API
// Generates court gavels, rubber stamps, streak chimes, and fanfare without external audio files

class ArcadeAudioEngine {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = true;

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('samvidhan_arcade_sound');
      if (saved !== null) {
        this.soundEnabled = saved === 'true';
      }
    }
  }

  public isMuted(): boolean {
    return !this.soundEnabled;
  }

  public setMuted(muted: boolean): void {
    this.soundEnabled = !muted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('samvidhan_arcade_sound', String(this.soundEnabled));
    }
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined' || !this.soundEnabled) return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  // Realistic Courtroom Gavel Strike
  playGavel(): void {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;

      // Primary wood impact thud (low frequency sine decaying fast)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.18);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);

      // Acoustic echo (secondary slap back)
      const slapOsc = ctx.createOscillator();
      const slapGain = ctx.createGain();
      slapOsc.type = 'triangle';
      slapOsc.frequency.setValueAtTime(260, now + 0.04);
      slapOsc.frequency.exponentialRampToValueAtTime(70, now + 0.18);

      slapGain.gain.setValueAtTime(0.2, now + 0.04);
      slapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      slapOsc.connect(slapGain);
      slapGain.connect(ctx.destination);
      slapOsc.start(now + 0.04);
      slapOsc.stop(now + 0.28);
    } catch {
      // Audio fallback silent
    }
  }

  // Rubber Stamp Seal Impact
  playStamp(): void {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.12);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } catch {
      // Audio fallback silent
    }
  }

  // Countdown timer tick (crisp woodblock click)
  playTick(): void {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now); // A5 crisp tick
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.04);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Audio fallback silent
    }
  }

  // Rapid fire correct chime with pitch shift by streak
  playCorrect(streak: number = 1): void {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const baseFreq = 523.25; // C5
      const multiplier = 1 + Math.min(streak * 0.08, 0.8);
      const freq1 = baseFreq * multiplier;
      const freq2 = freq1 * 1.25; // Major third

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq1, now);
      osc.frequency.exponentialRampToValueAtTime(freq2, now + 0.12);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch {
      // Audio fallback silent
    }
  }

  // Error buzzer
  playWrong(): void {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.2);

      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch {
      // Audio fallback silent
    }
  }

  // Level Up / Badge Fanfare
  playFanfare(): void {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      // C5, E5, G5, C6 triumphant arpeggio
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const now = ctx.currentTime + idx * 0.09;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      });
    } catch {
      // Audio fallback silent
    }
  }
}

export const arcadeAudio = new ArcadeAudioEngine();
