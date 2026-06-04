import { ArrowRight, FileText, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export function CTABanner() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        backgroundColor: '#0a1f6b',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '28px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Left: Icon + Text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <FileText size={26} color="white" />
          </div>
          <div>
            <h2
              style={{
                color: 'white',
                fontSize: '22px',
                fontWeight: 700,
                margin: 0,
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              Have a Project in Mind?
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '14px',
                margin: '4px 0 0 0',
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              Let's build a strong infrastructure together.
            </p>
          </div>
        </div>

        {/* Middle: Contact Info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            color: 'white',
            fontSize: '15px',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Phone size={18} color="rgba(255,255,255,0.9)" />
            <a href="tel:+97167317334" style={{ color: 'white', textDecoration: 'none' }}>+971 6 731 7334</a>
          </div>
          <div
            style={{
              width: '1px',
              height: '32px',
              backgroundColor: 'rgba(255,255,255,0.25)',
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Mail size={18} color="rgba(255,255,255,0.9)" />
            <span>info@arabplastpipes.com</span>
          </div>
        </div>

        {/* Right: CTA Button */}
        <motion.button
          onClick={() => {
            navigate('/contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: 'white',
            color: '#0a1f6b',
            padding: '12px 24px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '15px',
            fontFamily: 'Roboto, sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
          }}
        >
          Request a Quote
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </section>
  );
}
