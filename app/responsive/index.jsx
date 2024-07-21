/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {Box} from '@chakra-ui/react'

/**
 * Render the children in the DOM but visually hide them on desktop
 * @param children - isomorphic components used within a responsive design
 */
export const HideOnDesktop = ({children}) => (
    <Box display={{base: 'block', lg: 'none'}}>{children}</Box>
)

/**
 * Render the children in the DOM but visually hide them on mobile
 * @param children - isomorphic components used within a responsive design
 */
export const HideOnMobile = ({children}) => (
    <Box display={{base: 'none', lg: 'block'}}>{children}</Box>
)

/**
 * Render the children in the DOM but visually hide them on desktop
 * @param children - isomorphic components used within a responsive design
 */
export const HideOnDesktopXL = ({children}) => (
    <Box display={{base: 'block', xl: 'none'}}>{children}</Box>
)

/**
 * Render the children in the DOM but visually hide them on mobile
 * @param children - isomorphic components used within a responsive design
 */
export const HideOnMobileXL = ({children}) => (
    <Box display={{base: 'none', xl: 'block'}}>{children}</Box>
)

export default {HideOnMobile, HideOnMobileXL, HideOnDesktop, HideOnDesktopXL}
