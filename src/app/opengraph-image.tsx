import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Shashank Baswa - Full Stack & AI Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#121212',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
          <div style={{ fontSize: 40, letterSpacing: '0.2em', opacity: 0.5, marginBottom: 20, textTransform: 'uppercase' }}>
            B.E. AI & Data Science
          </div>
          <div style={{ fontSize: 80, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 20 }}>
            Shashank Sai Sri Baswa
          </div>
          <div style={{ fontSize: 32, opacity: 0.7, maxWidth: '800px', textAlign: 'center', lineHeight: 1.5 }}>
            I build AI systems and full-stack applications that ship to production.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
