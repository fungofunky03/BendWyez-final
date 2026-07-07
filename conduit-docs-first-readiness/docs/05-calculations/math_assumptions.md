# Math Assumptions

## Verification Rule

All formulas must be verified before implementation. No unverified formula constants may be hardcoded.

This includes:

- Shrink constants.
- Deducts.
- Multipliers.
- Conduit dimensions.
- Bender-specific defaults.
- Trade-size defaults.
- Calculator expected outputs.

## JavaScript Trigonometry

Project technical notes state that JavaScript trigonometric functions require radians.

Phase 2 plans include:

- Degree-to-radian conversion.
- Degree-based sin/tan wrappers.

## Fractional Inch Formatting

The task plan requires decimal-to-fractional-inch conversion with 1/16th accuracy.

Technical notes mention nearest 1/16th or 1/8th inch. Treat 1/8th behavior as TBD unless future docs clarify it.

Fraction formatting must target job-site tape-measure usability.

## Dynamic Updates

Calculations must update dynamically as values change. Calculator flows must not use Submit or Calculate buttons.

## TBD / Open Decisions

- Authoritative source for formulas.
- Authoritative source for constants and dimensions.
- Exact rounding rules for fractions.
- Whether to support mixed numbers and simplified fractions.
- Input parsing for fractional inches.
- Negative, zero, and invalid input handling.
- Floating-point tolerance for tests.
