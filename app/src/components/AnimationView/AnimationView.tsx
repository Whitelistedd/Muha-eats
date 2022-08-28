import React, { useRef, useEffect } from 'react'
import { Animated } from 'react-native'
import { AnimationViewProps } from './AnimationView.model'

export const AnimationView: React.FC<AnimationViewProps> = ({
  style,
  animation,
  duration,
  endValue,
  children,
}) => {
  const Anim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(Anim, {
      toValue: endValue,
      duration: duration,
      useNativeDriver: false,
    }).start()
  }, [Anim])

  return (
    <Animated.View
      style={{
        ...style,
        [animation]: Anim,
      }}
    >
      {children}
    </Animated.View>
  )
}
